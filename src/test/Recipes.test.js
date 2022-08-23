import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Recipes from '../components/Recipes';

describe('testes da aplicação', () => {
  test('testa se ao clicar no botão entrar a página é redirecionada', async () => {
    render(<Recipes />);
    const history = createMemoryHistory();

    waitFor(() => {
      expect(history.location.pathname).toBe('/foods');
    });
    const teste = screen.getByTestId('All-category-filter');
    expect(teste).toBeInTheDocument();
  });
});
