// Example test file: Gallery.test.tsx
import { render, screen } from '@testing-library/react';
import Gallery from '../components/Gallery';
import React from 'react';

test('renders loading text', () => {
    render(<Gallery />);
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
});

test('renders APOD Image alt text', () => {
    render(<Gallery />);
    const imageElement = screen.getByAltText(/APOD Image/i);
    expect(imageElement).toBeTruthy(); // or expect(imageElement).toBeInTheDocument();
});
