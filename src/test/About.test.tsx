// src/test/About.test.tsx

import { render, screen, waitFor } from '@testing-library/react';
import About from '../components/About';
import { vi } from 'vitest';
import React from 'react';

// Mock the fetch API
global.fetch = vi.fn(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
        title: 'Test APOD Title',
        explanation: 'Test explanation for APOD.',
        date: '2024-01-01',
        url: 'https://example.com/test-image.jpg',
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





});
