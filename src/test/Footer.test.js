import React from 'react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const LOGIN_BUTTON = 'login-submit-btn';

describe('testes do footer', () => {
  test('verifica se todos os elementos são renderizados', () => {
    render(<App />);

    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const buttonSubmit = screen.getByTestId(LOGIN_BUTTON);
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(buttonSubmit);

    const footer = screen.getByTestId('footer');
    const drinksButton = screen.getByTestId('drinks-bottom-btn');
    const foodButton = screen.getByTestId('food-bottom-btn');

    expect(footer).toBeInTheDocument();
    expect(drinksButton).toBeInTheDocument();
    expect(foodButton).toBeInTheDocument();
  });
  //   test('verifica se ao clicar no profile button, a página é renderizada', async () => {
  //     render(<App />);

//     const history = createMemoryHistory();
//     const profileButton = screen.getByTestId('profile-top-btn');
//     userEvent.click(profileButton);
//     waitFor(() => {
//       expect(history.location.pathname).toBe('/profile');
//     });
//   });
});
