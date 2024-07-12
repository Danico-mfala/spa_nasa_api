// src/test/About.test.tsx

import { render, screen, waitFor } from '@testing-library/react';
import About from '../components/About';
import { Mock, vi } from 'vitest';
import React from 'react';

// Mock the fetch API
global.fetch = vi.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
        title: 'Test APOD Title',
        explanation: 'Test explanation for APOD.',
        date: '2024-01-01',
        url: '../assets/image/banner_1.jpg',
    }),
})
) as unknown as jest.Mock;

describe('About Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(<About />);
        expect(screen.getByText(/About/i)).toBeInTheDocument();
    });

    it('displays loading indicator while fetching APOD data', () => {
        render(<About />);
        expect(screen.getByText(/Loading APOD data.../i)).toBeInTheDocument();
    });

    it('displays APOD data once fetched', async () => {
        render(<About />);

        await waitFor(() => {
            expect(screen.getByText(/Test APOD Title/i)).toBeInTheDocument();
            expect(screen.getByText(/Test explanation for APOD./i)).toBeInTheDocument();
            expect(screen.getByText(/Date:/i)).toBeInTheDocument();
            expect(screen.getByText(/2024-01-01/i)).toBeInTheDocument();
        });
    });

    it('displays error message on fetch failure', async () => {
        (global.fetch as Mock).mockImplementationOnce(() =>
            Promise.resolve({ ok: false })
        );

        render(<About />);

        await waitFor(() => {
            expect(screen.getByText(/Failed to load APOD data. Please try again later./i)).toBeInTheDocument();
        });
    });
});
