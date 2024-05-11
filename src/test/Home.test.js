// Home.test.js

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axiosMock from 'axios';
import Home from '../pages/Home/Home';

jest.mock('axios');

describe('Home component', () => {
  it('renders content fetched from NASA API', async () => {
    const mockImageData = {
      url: 'https://example.com/image.jpg',
      explanation: 'This is a test image description.',
    };

    const mockSoftwareData = {
      results: [
        {
          2: 'Software Name',
          3: 'Software Description',
          6: 'Type',
          8: 'Link',
        },
      ],
    };

    const mockSatelliteData = {
      member: [
        {
          name: 'Satellite Name',
          line1: 'Line 1',
          line2: 'Line 2',
          date: 'Date',
        },
      ],
    };

    axiosMock.get.mockResolvedValueOnce({ data: mockImageData })
      .mockResolvedValueOnce({ data: mockSoftwareData })
      .mockResolvedValueOnce({ data: mockSatelliteData });

    const { getByText, getByAltText } = render(<Home />);

    await waitFor(() => {
      expect(axiosMock.get).toHaveBeenCalledTimes(3);
    });

    expect(getByAltText('Astronomy Picture of the Day')).toHaveAttribute('src', 'https://example.com/image.jpg');
    expect(getByText('This is a test image description.')).toBeInTheDocument();
    expect(getByText('Software Name')).toBeInTheDocument();
    expect(getByText('Software Description')).toBeInTheDocument();
    expect(getByText('Type')).toBeInTheDocument();
    expect(getByText('Link')).toBeInTheDocument();
    expect(getByText('Satellite Name')).toBeInTheDocument();
    expect(getByText('Line 1')).toBeInTheDocument();
    expect(getByText('Line 2')).toBeInTheDocument();
    expect(getByText('Date')).toBeInTheDocument();
  });
});
