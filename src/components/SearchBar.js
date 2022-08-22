import React from 'react';

export default function SearchBar() {
  return (
    <div>
      <input type="radio" data-testid="ingredient-search-radio" />
      <input type="radio" data-testid="name-search-radio" />
      <input type="radio" data-testid="first-letter-search-radio" />
      <button type="button" data-testid="exec-search-btn">
        Buscar
      </button>
    </div>
  );
}
