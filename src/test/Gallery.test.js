// Gallery.test.js

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axiosMock from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { Gallery } from '../pages/Gallery/Gallery';

jest.mock('axios');

describe('Gallery component', () => {
  it('renders images from NASA API', async () => {
    const mockData = [
      {
        links: [{ href: 'https://example.com/image1.jpg' }],
      },
      {
        links: [{ href: 'https://example.com/image2.jpg' }],
      },
    ];

    axiosMock.get.mockResolvedValueOnce({ data: { collection: { items: mockData } } });

    const { getByAltText } = render(<Gallery />, { wrapper: MemoryRouter });

    await waitFor(() => {
      expect(axiosMock.get).toHaveBeenCalledTimes(1);
      expect(axiosMock.get).toHaveBeenCalledWith('https://images-api.nasa.gov/search?q=nasa');
    });

    expect(getByAltText('Image 1')).toBeInTheDocument();
    expect(getByAltText('Image 2')).toBeInTheDocument();
  });

  it('fetches images based on user input', async () => {
    const mockData = [
      {
        links: [{ href: 'https://example.com/image3.jpg' }],
      },
    ];

    axiosMock.get.mockResolvedValueOnce({ data: { collection: { items: mockData } } });

    const { getByLabelText, getByRole, getByAltText } = render(<Gallery />, { wrapper: MemoryRouter });

    const input = getByLabelText('Search');
    const button = getByRole('button', { name: 'Search' });

    fireEvent.change(input, { target: { value: 'moon' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(axiosMock.get).toHaveBeenCalledTimes(2);
      expect(axiosMock.get).toHaveBeenCalledWith('https://images-api.nasa.gov/search?q=moon');
    });

    expect(getByAltText('Image 3')).toBeInTheDocument();
  });
});
