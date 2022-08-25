import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function FoodInProgress() {
  const {
    setTitle,
    recipeDetails,
  } = useContext(AppContext);

  const { thumb, name, category, instructions, recipeTitle, ingredients } = recipeDetails;

  useEffect(() => {
    document.title = 'Food In Progress';
    setTitle(document.title);
  }, []);
  return (
    <div>
      <h1 data-testid="recipe-title">{ recipeTitle }</h1>
      <img
        src={ thumb }
        alt={ `${name} recipe.` }
        data-testid="recipe-photo"
      />
      <button
        type="button"
        data-testid="share-btn"
      >
        Share
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favorite
      </button>
      <p data-testid="recipe-category">{ category }</p>
      <p data-testid="instructions">{ instructions }</p>
      <div>
        { ingredients.map((ingredient, index) => (
          <checkbox key={ index } data-testid={ `${index}-ingredient-step` }>
            { ingredient }
          </checkbox>
        )) }
      </div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finish recipe
      </button>
    </div>
  );
}

export default FoodInProgress;
