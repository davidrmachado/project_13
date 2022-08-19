import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('verifica se os elementos são renderizados', () => {
  render(<App />);

  const emailInput = screen.getByTestId('email-input');
  const passwordInput = screen.getByTestId('password-input');
  const buttonSubmit = screen.getByTestId('login-submit-btn');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(buttonSubmit).toBeInTheDocument();
});
