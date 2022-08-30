import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { foodDetailAPI } from '../services/foodAPI';
import AppContext from '../context/AppContext';
import { drinkDetailAPI } from '../services/drinkAPI';
import DetailCards from './DetailCard';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import {
  startOrContinueMeals,
  startOrContinueCocktails, handleStartRecipe } from '../services/handlers';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { handleShare,
  handleFavorite,
  handleHeart } from '../services/helpers/functions/handles';

function RecipeDetails({ type, id }) {
  const history = useHistory();
  const { pathname } = history.location;
  const objImg = { black: blackHeartIcon, white: whiteHeartIcon };
  const {
    setTipo,
    setidProgress,
    detail,
    setDetail,
    startedRecipe,
    doneRecipe,
    alert,
    setAlert,
    setFavorites,
    favorites,
    setStartedRecipe,
  } = useContext(AppContext);

  const createInProgressRecipesStorage = () => {
    const inProgressRecipesObject = {
      meals: {},
      cocktails: {},
    };
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (inProgressRecipes === null) {
      localStorage.setItem('inProgressRecipes', JSON
        .stringify(inProgressRecipesObject));
    }
  };

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

  useEffect(() => {
    createInProgressRecipesStorage();
    if (type === 'foods') {
      setTipo('foods');
      getFoodDetails();
      startOrContinueMeals(id, setStartedRecipe);
    } else if (type === 'drinks') {
      setTipo('drinks');
      getDrinkDetails();
      startOrContinueCocktails(id, setStartedRecipe);
    }
  }, []);

  const handleIngMeaDrink = (data) => {
    const filteredIngredients = data.filter((key) => key[0]
      .includes('strIngredient') && (key[1] !== null && key[1] !== ''));
    const ingArray = filteredIngredients.reduce((acc, value) => [...acc, value[1]], []);
    const filteredMeasures = data.filter((key) => key[0]
      .includes('strMeasure') && (key[1] !== null && key[1] !== ' '));
    const meaArray = filteredMeasures.reduce((acc, value) => [...acc, value[1]], []);
    const arrayToMap = ingArray.map((ing, index) => `${ing} - ${meaArray[index]}`);

    return (
      arrayToMap.map((string, index) => (
        <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
          {string}
        </li>)));
  };

  const handleYoutube = (url) => {
    const newUrl = url.includes('watch') ? url.replace('watch?v=', 'embed/') : url;
    return (
      <div>
        <iframe
          width="420px"
          height="360px"
          src={ newUrl }
          frameBorder="0"
          data-testid="video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
    );
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
              style={ { position: 'fixed', bottom: '0px', marginLeft: '290px' } }
              type="button"
              onClick={ () => handleShare(pathname, setAlert) }
            >
              Share
            </button>
            <button
              data-testid="favorite-btn"
              type="button"
              id="favorite-btn"
              style={ { position: 'fixed', bottom: '0px', marginLeft: '150px' } }
              src={ handleHeart(id, favorites, whiteHeartIcon, blackHeartIcon) }
              onClick={ () => handleFavorite(type, detail, setFavorites, objImg) }
            >
              Favorite
            </button>
            {!doneRecipe
        && (
          startedRecipe
            ? (
              <Link
                data-testid="start-recipe-btn"
                style={ { position: 'fixed', bottom: '0px', marginLeft: '0px' } }
                to={ `/${type}/${id}/in-progress` }
              >
                Continue Recipe
              </Link>
            )
            : (
              <Link
                data-testid="start-recipe-btn"
                onClick={ () => handleStartRecipe(id, type) }
                style={ { position: 'fixed', bottom: '0px', marginLeft: '0px' } }
                to={ `/${type}/${id}/in-progress` }
              >
                Start Recipe
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
              onClick={ () => handleShare(pathname, setAlert) }
            >
              Share
            </button>
            <button
              data-testid="favorite-btn"
              type="button"
              id="favorite-btn"
              style={ { position: 'fixed', bottom: '0px', marginLeft: '150px' } }
              src={ handleHeart(id, favorites, whiteHeartIcon, blackHeartIcon) }
              onClick={ () => handleFavorite(type, detail, setFavorites, objImg) }
            >
              Favorite
            </button>
            {!doneRecipe
            && (
              startedRecipe
                ? (
                  <Link
                    data-testid="start-recipe-btn"
                    style={ { position: 'fixed', bottom: '0px', marginLeft: '0px' } }
                    to={ `/${type}/${id}/in-progress` }
                  >
                    Continue Recipe
                  </Link>
                )
                : (
                  <Link
                    onClick={ () => handleStartRecipe(id, type) }
                    data-testid="start-recipe-btn"
                    style={ { position: 'fixed', bottom: '0px', marginLeft: '0px' } }
                    to={ `/${type}/${id}/in-progress` }
                  >
                    Start Recipe
                  </Link> // para passar no cypress
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
