import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders moving text with correct class', () => {
  render(<App />);
  const movingTextElement = screen.getByText(/This is some moving text!/i);
  expect(movingTextElement).toBeInTheDocument();
  expect(movingTextElement).toHaveClass('moving-text');
});
