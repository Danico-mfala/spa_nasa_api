import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from '../components/Gallery';
import React from 'react';

describe('Gallery Component', () => {
  it('renders the Gallery component without crashing', () => {
    render(<Gallery />);
    expect(screen.getByText(/Gallery/i)).toBeInTheDocument();
  });

  it('displays loading indicator while fetching images', async () => {
    render(<Gallery />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    await screen.findByText(/No images fetched yet/i);
  });

});
