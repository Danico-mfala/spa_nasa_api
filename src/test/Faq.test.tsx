import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import FAQ from '../components/Faq';
import { vi } from 'vitest';
import React from 'react';

// Mock the fetch API
global.fetch = vi.fn();

describe('FAQ Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders loading state initially', () => {
        render(<FAQ />);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('displays error message on fetch failure', async () => {
        (fetch as jest.Mock).mockImplementationOnce(() =>
            Promise.reject(new Error('Fetch failed'))
        );

        render(<FAQ />);

        await waitFor(() => {
            expect(screen.getByText(/Failed to load FAQ. Please try again later./i)).toBeInTheDocument();
        });
    });

    it('toggles FAQ answer when question is clicked', async () => {
        const mockData = [
            {
                date: '2023-01-01',
                explanation: 'This is a test explanation for the APOD on January 1, 2023.',
            },
        ];

        (fetch as jest.Mock).mockImplementationOnce(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        );

        render(<FAQ />);

        await waitFor(() => {
            expect(screen.getByText(/What is the Astronomy Picture of the Day on 2023-01-01?/i)).toBeInTheDocument();
        });

        const questionButton = screen.getByText(/What is the Astronomy Picture of the Day on 2023-01-01?/i);
        fireEvent.click(questionButton);

        expect(screen.getByText(/This is a test explanation for the APOD on January 1, 2023./i)).toBeInTheDocument();

        fireEvent.click(questionButton); // Toggle again
        expect(screen.queryByText(/This is a test explanation for the APOD on January 1, 2023./i)).not.toBeInTheDocument();
    });
});
