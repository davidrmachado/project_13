import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import App from '../App';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const LOGIN_BUTTON = 'login-submit-btn';
describe('testes da aplicação', () => {
  test('verifica se os elementos são renderizados na tela de login', () => {
    render(<App />);

    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const buttonSubmit = screen.getByTestId(LOGIN_BUTTON);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(buttonSubmit).toBeInTheDocument();
  });
  test('verifica se ao preencher corretamente os campos o botão é habilitado', () => {
    render(<App />);

    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const buttonSubmit = screen.getByTestId(LOGIN_BUTTON);

    expect(buttonSubmit).toBeDisabled();
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '1234567');
    expect(buttonSubmit).not.toBeDisabled();
  });
  test('testa se ao clicar no botão entrar a página é redirecionada', () => {
    render(<App />);
    const history = createMemoryHistory();

    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const buttonSubmit = screen.getByTestId(LOGIN_BUTTON);
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(buttonSubmit);
    expect(history.location.pathname).toBe('/');
  });
});
