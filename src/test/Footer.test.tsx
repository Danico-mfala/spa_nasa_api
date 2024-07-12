import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import React from 'react';

describe('Footer Component', () => {
    it('contains an input for email', () => {
        render(<Footer />);

        const input = screen.getByPlaceholderText(/Enter your email/i);
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text'); // Check input type
    });





});
