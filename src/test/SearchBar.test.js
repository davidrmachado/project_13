import React from 'react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import mockIngredientSearch from '../services/helpers/mockIngredientSearch';
// import renderWithRouter from '../services/helpers/renderWithRouter';

const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const LOGIN_BUTTON = 'login-submit-btn';

// jest.spyOn(global, 'fetch');
// jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('testes do header', () => {
  test('verifica se todos os elementos são renderizados', async () => {
    render(<App />);

    // global.fetch.mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(mockIngredientSearch),
    // });

    const history = createMemoryHistory();

    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const buttonSubmit = screen.getByTestId(LOGIN_BUTTON);
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(buttonSubmit);
    const searchButton = screen.getByTestId('search-top-btn');
    userEvent.click(searchButton);

    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const nameRadio = screen.getByTestId('name-search-radio');
    const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
    const searchExecButton = screen.getByTestId('exec-search-btn');
    // const searchInput = screen.getByTestId('search-input');

    expect(ingredientRadio).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(firstLetterRadio).toBeInTheDocument();
    expect(searchExecButton).toBeInTheDocument();

    // userEvent.type(searchInput, 'c');
    // userEvent.click(ingredientRadio);
    // userEvent.click(searchExecButton);
    // expect(fetch).toBeCalled();

    // userEvent.click(nameRadio);
    // userEvent.click(searchExecButton);
    // expect(fetch).toBeCalled();

    // userEvent.click(firstLetterRadio);
    // userEvent.click(searchExecButton);
    // expect(fetch).toBeCalled();

    // userEvent.type(searchInput, 'chi');
    // userEvent.click(firstLetterRadio);
    // userEvent.click(searchExecButton);
    // expect(window.alert).toBeCalled();

    const drinksButton = screen.getByTestId('drinks-bottom-btn');
    expect(drinksButton).toBeInTheDocument();
    userEvent.click(drinksButton);

    // const { pathname } = history.location;
    waitFor(() => {
      console.log(history);
    });
    // expect(pathname).toBe('/drinks');
  });

  // test('verifica chamada a API - Name Radio', () => {
  //   renderWithRouter(<App />);

  //   global.fetch.mockResolvedValue({
  //     json: jest.fn().mockResolvedValue(mockIngredientSearch),
  //   });

  //   const searchButton = screen.getByTestId('search-top-btn');
  //   userEvent.click(searchButton);

  //   const nameRadio = screen.getByTestId('name-search-radio');
  //   const searchExecButton = screen.getByTestId('exec-search-btn');
  //   const searchInput = screen.getByTestId('search-input');

  //   expect(nameRadio).toBeInTheDocument();
  //   expect(searchExecButton).toBeInTheDocument();

  //   userEvent.type(searchInput, 'chicken');
  //   userEvent.click(nameRadio);
  //   userEvent.click(searchExecButton);
  //   expect(fetch).toBeCalled();
  // });

  // test('verifica chamada a API - Name Radio', () => {
  //   renderWithRouter(<App />);

  //   global.fetch.mockResolvedValue({
  //     json: jest.fn().mockResolvedValue(mockIngredientSearch),
  //   });

  //   const searchButton = screen.getByTestId('search-top-btn');
  //   userEvent.click(searchButton);

  //   const firstLetterRadio = screen.getByTestId('first-letter-search-radio');
  //   const searchExecButton = screen.getByTestId('exec-search-btn');
  //   const searchInput = screen.getByTestId('search-input');

  //   expect(firstLetterRadio).toBeInTheDocument();
  //   expect(searchExecButton).toBeInTheDocument();

  //   userEvent.type(searchInput, 'chicken');
  //   userEvent.click(firstLetterRadio);
  //   userEvent.click(searchExecButton);
  //   expect(fetch).toBeCalled();
  // });
});
