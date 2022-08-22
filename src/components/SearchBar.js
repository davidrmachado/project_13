import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import { fetchIngredients, fetchNames, fetchFirstLetter } from '../services/foodAPI';

export default function SearchBar() {
  const [searchId, setSearchId] = useState('');
  const { searchInput } = useContext(AppContext);

  const handleClick = async () => {
    if (searchId === 'ingredient') {
      const isFetch = await fetchIngredients(searchInput);
      return isFetch;
    } if (searchId === 'name') {
      const isFetch = await fetchNames(searchInput);
      return isFetch;
    } if (searchId === 'first-letter') {
      if (searchInput.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      const isFetch = await fetchFirstLetter(searchInput);
      return isFetch;
    }
  };

  const handleChange = ({ target }) => {
    setSearchId(target.id);
  };

  return (
    <div>
      <label htmlFor="search-radio">
        Ingredient
        <input
          type="radio"
          name="search-radio"
          id="ingredient"
          data-testid="ingredient-search-radio"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="search-radio">
        Name
        <input
          type="radio"
          name="search-radio"
          id="name"
          onChange={ handleChange }
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="search-radio">
        First letter
        <input
          type="radio"
          name="search-radio"
          onChange={ handleChange }
          id="first-letter"
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}
