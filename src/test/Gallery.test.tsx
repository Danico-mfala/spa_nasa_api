import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from '../components/Gallery';
import React from 'react';

describe('Gallery Component', () => {
  it('renders the Gallery component without crashing', () => {
    render(<Gallery />);
    expect(screen.getByText(/Gallery/i)).toBeInTheDocument();
  });

});
