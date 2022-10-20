import React, { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomePage } from 'pages';

test('Page loaded', () => {
  render(<HomePage />);
  expect(screen.getByText('TreeMatch')).toBeInTheDocument();
});
