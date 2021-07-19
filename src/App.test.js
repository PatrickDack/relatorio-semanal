import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('reports name', () => {
  const { getByText } = render(<App />);
  const nameElement = getByText(/total bruto/i);
  expect(nameElement).toBeInTheDocument();
});
