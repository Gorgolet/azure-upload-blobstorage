import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Gorgo link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Azure upload to blobstorage/i);
  expect(linkElement).toBeInTheDocument();
});
