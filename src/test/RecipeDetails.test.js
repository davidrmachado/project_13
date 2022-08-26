import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import AppProvider from '../context/AppProvider';
import FoodDetails from '../pages/FoodDetails';
import DrinkDetails from '../pages/DrinkDetails';

const START_BUTTON = 'start-recipe-btn';
const FAVORITE_BUTTON = 'favorite-btn';

describe('testes da tela de receita em progresso', () => {
  test('verifica se os items estão na tela', async () => {
    render(<AppProvider><FoodDetails /></AppProvider>);
    waitFor(() => {
      expect(screen.getByTestId('recipe-title')).toBeInTheDocument();
      expect(screen.getByTestId('recipe-photo')).toBeInTheDocument();
      expect(screen.getByTestId('recipe-category')).toBeInTheDocument();
      expect(screen.getByTestId('instructions')).toBeInTheDocument();
      expect(screen.getByTestId('0-ingredient-name-and-measure')).toBeInTheDocument();
      expect(screen.getByTestId('video')).toBeInTheDocument();
      expect(screen.getByTestId(START_BUTTON)).toBeInTheDocument();
      expect(screen.getByTestId('share-btn')).toBeInTheDocument();
      expect(screen.getByTestId(FAVORITE_BUTTON)).toBeInTheDocument();
    });
  });
  test('verifica se ao clicar em start ou continue, redireciona para outra página',
    async () => {
      render(<AppProvider><FoodDetails /></AppProvider>);
      const history = createMemoryHistory();
      waitFor(() => {
        const button = screen.getByTestId(START_BUTTON);
        userEvent.click(button);
        expect(history.location.pathname).toBe('/52771/in-progress');
      });
    });
  test('verifica se os items estão na tela', async () => {
    render(<AppProvider><DrinkDetails /></AppProvider>);
    waitFor(() => {
      expect(screen.getByTestId('recipe-title')).toBeInTheDocument();
      expect(screen.getByTestId('recipe-photo')).toBeInTheDocument();
      expect(screen.getByTestId('recipe-category')).toBeInTheDocument();
      expect(screen.getByTestId('instructions')).toBeInTheDocument();
      expect(screen.getByTestId('0-ingredient-name-and-measure')).toBeInTheDocument();
      expect(screen.getByTestId(START_BUTTON)).toBeInTheDocument();
      expect(screen.getByTestId('share-btn')).toBeInTheDocument();
      expect(screen.getByTestId(FAVORITE_BUTTON)).toBeInTheDocument();
    });
  });
  test('verifica se ao clicar em start ou continue, redireciona para outra página',
    async () => {
      render(<AppProvider><DrinkDetails /></AppProvider>);
      const history = createMemoryHistory();
      waitFor(() => {
        const button = screen.getByTestId(START_BUTTON);
        userEvent.click(button);
        expect(history.location.pathname).toBe('/15997/in-progress');
      });
    });
  test('verifica se ao clicar em favorite, o localstorage é alterado', async () => {
    render(<AppProvider><FoodDetails /></AppProvider>);
    waitFor(() => {
      const button = screen.getByTestId(FAVORITE_BUTTON);
      const expectedFavoriteRecipes = [
        {
          id: '178319',
          type: 'drink',
          nationality: '',
          category: 'Cocktail',
          alcoholicOrNot: 'Alcoholic',
          name: 'Aquamarine',
          image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
        },
      ];
      userEvent.click(button);
      expect(JSON.parse(localStorage.getItem('favoriteRecipe')))
        .toBe(expectedFavoriteRecipes);
    });
  });
  test('verifica se ao clicar em favorite, o localstorage é alterado', async () => {
    render(<AppProvider><DrinkDetails /></AppProvider>);
    waitFor(() => {
      const button = screen.getByTestId(FAVORITE_BUTTON);
      const favoriteRecipes = [{
        id: '178319',
        type: 'drink',
        nationality: '',
        category: 'Cocktail',
        alcoholicOrNot: 'Alcoholic',
        name: 'Aquamarine',
        image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      }];
      userEvent.click(button);
      expect(JSON.parse(localStorage.getItem('favoriteRecipe')))
        .toBe(favoriteRecipes);
    });
  });
});
