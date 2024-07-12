import { render, screen } from '@testing-library/react';
import Home from '../components/Home'; // Adjust the import path as necessary
import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import { vi } from 'vitest';

// Mock the Carousel component
vi.mock('react-responsive-carousel', () => {
    return {
        Carousel: ({ children }: any) => <div>{children}</div>,
    };
});

describe('Home Component', () => {
    it('renders the carousel with slides', () => {
        render(<Home />);

        // Check if the title and subtitle of the first slide are present
        expect(screen.getByText(/Explore the Cosmos/i)).toBeInTheDocument();
        expect(screen.getByText(/Discover stunning images and captivating stories/i)).toBeInTheDocument();

        // Check if the title and subtitle of the second slide are present
        expect(screen.getByText(/Capture the Cosmos/i)).toBeInTheDocument();
        expect(screen.getByText(/Immerse yourself in the universe's wonders/i)).toBeInTheDocument();

        // Check for the presence of images
        const images = screen.getAllByRole('img');
        expect(images).toHaveLength(2); // Should have two images
        expect(images[0]).toHaveAttribute('alt', 'Explore the Cosmos');
        expect(images[1]).toHaveAttribute('alt', 'Capture the Cosmos');
    });

    it('contains the correct text in paragraphs', () => {
        render(<Home />);

        expect(screen.getByText(/Dive into the wonders of the cosmos daily/i)).toBeInTheDocument();
        expect(screen.getByText(/Explore awe-inspiring images and stories/i)).toBeInTheDocument();
    });
});
