import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  render(<App />);
});

describe('Testa a funcionalidade da aplicação', () => {
  it('adiciona valores ao RESUMO de entrada', async () =>{
    const input = screen.getAllByPlaceholderText(/digite um valor/i);
    const button = screen.getAllByRole('button');
    expect(input[0]).toHaveValue('');
    userEvent.type(input[0], '1500');
    userEvent.click(button[0]);
    const resume = screen.getByTestId('resume');
    expect(resume).toHaveTextContent(/^R\$ 1500.00$/);
  });
});

// it('', () =>{
// });
