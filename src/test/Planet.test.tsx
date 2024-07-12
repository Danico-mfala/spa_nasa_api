import { render, screen, waitFor } from '@testing-library/react';
import Planet from '../components/Planet'; // Adjust the import path as necessary
import { Mock, vi } from 'vitest';
import axios from 'axios';
import React from 'react';

// Mock axios
vi.mock('axios');

describe('Planet Component', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders without crashing', () => {
        render(<Planet />);
        expect(screen.getByText(/Explore Planets/i)).toBeInTheDocument();
    });

    it('displays loading indicator while fetching data', () => {
        (axios.get as Mock).mockImplementation(() =>
            new Promise(() => { }) // Simulate a pending promise
        );

        render(<Planet />);
        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    });

    it('displays error message on fetch failure', async () => {
        (axios.get as Mock).mockRejectedValue(new Error('Network Error'));

        render(<Planet />);

        await waitFor(() => {
            expect(screen.getByText(/Failed to load images. Please try again later./i)).toBeInTheDocument();
        });
    });
});
