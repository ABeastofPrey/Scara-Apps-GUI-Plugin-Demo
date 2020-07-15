import React from 'react';
import { render } from '@testing-library/react';
import MainPlugin from './plugin';

test('renders learn react link', () => {
  const { getByText } = render(<MainPlugin />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});