import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { foodDetailAPI } from '../services/foodAPI';
import AppContext from '../context/AppContext';
import { drinkDetailAPI } from '../services/drinkAPI';
import DetailCards from './DetailCard';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { handleIngMeaDrink, handleYoutube, handleFavorite } from '../services/handlers';

function RecipeDetails({ type, id }) {
  const history = useHistory();

  const {
    setTipo,
    setidProgress,
    detail,
    setDetail,
    startedRecipe,
    doneRecipe,
    setStartedRecipe,
  } = useContext(AppContext);

  const [alert, setAlert] = useState(false);

  async function getFoodDetails() {
    const { meals } = await foodDetailAPI(id);
    setDetail(meals);
    setidProgress(id);
  }

  async function getDrinkDetails() {
    const { drinks } = await drinkDetailAPI(id);
    setidProgress(id);
    setDetail(drinks);
  }

  const startOrContinue = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes !== null) {
      inProgressRecipes.map((item) => (item
        .id === id ? setStartedRecipe(true) : setStartedRecipe(false)));
    } else {
      setStartedRecipe(false);
    }
  };

  useEffect(() => {
    startOrContinue();
    if (type === 'foods') {
      setTipo('foods');
      getFoodDetails();
    } else if (type === 'drinks') {
      setTipo('drinks');
      getDrinkDetails();
    }
  }, []);

  const handleShare = () => {
    const copyText = `http://localhost:3000${history.location.pathname}`;
    navigator.clipboard.writeText(copyText);
    setAlert(true);
  };

  const handleStartRecipe = (recipeId) => {
    const obj = { id: recipeId, checkbox: [] };
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes !== null) {
      localStorage.setItem('inProgressRecipes', JSON
        .stringify([...inProgressRecipes, obj]));
    } else {
      localStorage.setItem('inProgressRecipes', JSON.stringify([obj]));
    }
  };

  if (type === 'foods') {
    return (
      <div>
        {detail.map((item, index) => (
          <div key={ index }>
            <h1 data-testid="recipe-title">{item.strMeal}</h1>
            <img
              src={ item.strMealThumb }
              alt={ item.strMeal }
              data-testid="recipe-photo"
              width="420"
              height="345"
            />
            { alert && <p>Link copied!</p> }
            <h4>Category</h4>
            <p data-testid="recipe-category">{item.strCategory}</p>
            <h4> Intructions </h4>
            <p data-testid="instructions">{item.strInstructions}</p>
            <h4>Ingridients</h4>
            <ul>{handleIngMeaDrink(Object.entries(item))}</ul>
            <h4>Recomended Drinks</h4>
            <DetailCards typeOf={ type } />
            <h4>YouTube Video</h4>
            {handleYoutube(item.strYoutube)}
            <button
              data-testid="share-btn"
              style={ { position: 'fixed', bottom: '0px', marginLeft: '300px' } }
              type="button"
              onClick={ handleShare }
            >
              Share
            </button>
            <button
              data-testid="favorite-btn"
              type="button"
              style={ { position: 'fixed', bottom: '0px', marginLeft: '150px' } }
              src={ whiteHeartIcon }
              onClick={ () => handleFavorite(type) }
            >
              Favorite
            </button>
            {!doneRecipe
        && (
          startedRecipe
            ? (
              <Link
                to={ `/${type}/${id}/in-progress` }
                data-testid="start-recipe-btn"
              >
                <button
                  data-testid="start-recipe-btn"
                  type="button"
                  style={ { position: 'fixed', bottom: '0px', marginLeft: '150px' } }
                >
                  Continue Recipe
                </button>
              </Link>
            )
            : (
              <Link
                to={ `/${type}/${id}/in-progress` }
                data-testid="start-recipe-btn"
              >
                <button
                  data-testid="start-recipe-btn"
                  type="button"
                  onClick={ () => handleStartRecipe(id) }
                  style={ { position: 'fixed', bottom: '0px', marginLeft: '150px' } }
                >
                  Start Recipe
                </button>
              </Link>
            )
        )}
          </div>
        ))}
      </div>
    );
  } if (type === 'drinks') {
    return (
      <div>
        {detail.map((item, index) => (
          <div key={ index }>
            <h1 data-testid="recipe-title">{item.strDrink}</h1>
            <img
              src={ item.strDrinkThumb }
              alt={ item.strDrink }
              data-testid="recipe-photo"
              width="420"
              height="345"
            />
            { alert && <p>Link copied!</p> }
            <h4>Category</h4>
            <p data-testid="recipe-category">{item.strAlcoholic}</p>
            <h4> Intructions </h4>
            <p data-testid="instructions">{item.strInstructions}</p>
            <h4>Ingridients</h4>
            <ul>{handleIngMeaDrink(Object.entries(item))}</ul>
            <DetailCards typeOf={ type } />
            <button
              data-testid="share-btn"
              style={ { position: 'fixed', bottom: '0px', marginLeft: '300px' } }
              type="button"
              onClick={ handleShare }
            >
              Share
            </button>
            <button
              data-testid="favorite-btn"
              type="button"
              style={ { position: 'fixed', bottom: '0px', marginLeft: '150px' } }
              src={ whiteHeartIcon }
              onClick={ () => handleFavorite(type) }
            >
              Favorite
            </button>
            {!doneRecipe
            && (
              startedRecipe
                ? (
                  <Link
                    to={ `/${type}/${id}/in-progress` }
                  >
                    <button
                      type="button"
                      data-testid="start-recipe-btn"
                      style={ { position: 'fixed', bottom: '0px', marginLeft: '150px' } }
                    >
                      Continue Recipe
                    </button>
                  </Link>
                )
                : (
                  <Link
                    to={ `/${type}/${id}/in-progress` }
                  >
                    <button
                      type="button"
                      onClick={ () => handleStartRecipe(id) }
                      data-testid="start-recipe-btn"
                      style={ { position: 'fixed', bottom: '0px', marginLeft: '150px' } }
                    >
                      Start Recipe
                    </button>
                  </Link>
                )
            )}
          </div>
        ))}
      </div>
    );
  }
}

RecipeDetails.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipeDetails;
