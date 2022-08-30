import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { foodDetailAPI } from '../services/foodAPI';
import AppContext from '../context/AppContext';
import { drinkDetailAPI } from '../services/drinkAPI';
import DetailCards from './DetailCard';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { handleShare,
  handleFavorite,
} from '../services/helpers/functions/handles';

const CONTINUE_RECIPE = 'Continue Recipe';

function RecipeDetails({ type, id }) {
  const history = useHistory();
  const { pathname } = history.location;
  const objImg = { black: blackHeartIcon, white: whiteHeartIcon };
  const {
    setTipo,
    setidProgress,
    detail, setDetail,
    startedRecipe,
    doneRecipe,
    alert, setAlert,
    setFavorites, favorites,
  } = useContext(AppContext);
  const fav = JSON.parse(window.localStorage.getItem('favoriteRecipes'));
  console.log(fav);
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
  console.log(document.getElementById('favorite-btn'));
  useEffect(() => {
    if (type === 'foods') {
      setTipo('foods');
      getFoodDetails();
    } else if (type === 'drinks') {
      setTipo('drinks');
      getDrinkDetails();
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

            {!doneRecipe
        && (
          startedRecipe
            ? (
              <Link
                data-testid="start-recipe-btn"
                style={ { position: 'fixed', bottom: '0px', marginLeft: '0px' } }
                to={ `/${type}/${id}/in-progress` }
              >
                {CONTINUE_RECIPE}
              </Link>
            )
            : (
              <Link
                data-testid="start-recipe-btn"
                style={ { position: 'fixed', bottom: '0px', marginLeft: '0px' } }
                to={ `/${type}/${id}/in-progress` }
              >
                {CONTINUE_RECIPE}
              </Link>
            )
        )}
          </div>
        ))}
        <button
          data-testid="share-btn"
          style={ { position: 'fixed', bottom: '0px', marginLeft: '290px' } }
          type="button"
          onClick={ () => handleShare(pathname, setAlert) }
        >
          Share
        </button>
        <button
          type="button"
          style={ { position: 'fixed', bottom: '0px', marginLeft: '150px' } }
          onClick={ () => handleFavorite(type, detail, setFavorites, objImg) }
        >
          <img
            data-testid="favorite-btn"
            id="favorite-btn"
            src={ fav[0].id.includes(id) ? blackHeartIcon : whiteHeartIcon }
            // src={ handleHeart(id, whiteHeartIcon, blackHeartIcon, favorites) }
            alt="favorite icon"
          />
        </button>
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
            {!doneRecipe
            && (
              startedRecipe
                ? (
                  <Link
                    data-testid="start-recipe-btn"
                    style={ { position: 'fixed', bottom: '0px', marginLeft: '0px' } }
                    to={ `/${type}/${id}/in-progress` }
                  >
                    {CONTINUE_RECIPE}
                  </Link>
                )
                : (
                  <Link
                    data-testid="start-recipe-btn"
                    style={ { position: 'fixed', bottom: '0px', marginLeft: '0px' } }
                    to={ `/${type}/${id}/in-progress` }
                  >
                    {CONTINUE_RECIPE}
                  </Link> // para passar no cypress

                )
            )}
          </div>
        ))}
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
          src={ fav.includes(id) ? blackHeartIcon : whiteHeartIcon }
          onClick={ () => handleFavorite(type, detail, setFavorites, objImg) }
        >
          Favorite
        </button>
      </div>
    );
  }
}

RecipeDetails.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipeDetails;
