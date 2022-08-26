import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { foodDetailAPI } from '../services/foodAPI';
import AppContext from '../context/AppContext';
import { drinkDetailAPI } from '../services/drinkAPI';
import DetailCards from './DetailCard';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function RecipeDetails({ type, id }) {
  const history = useHistory();
  const {
    detail,
    setDetail,
    // doneRecipe,
    // startedRecipe,
  } = useContext(AppContext);

  async function getFoodDetails() {
    const { meals } = await foodDetailAPI(id);
    setDetail(meals);
  }
  async function getDrinkDetails() {
    const { drinks } = await drinkDetailAPI(id);
    setDetail(drinks);
  }

  useEffect(() => {
    if (type === 'foods') {
      getFoodDetails();
    } else if (type === 'drinks') {
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
  const handleShare = () => {
    const copyText = `http://localhost:3000${history.location.pathname}`;
    navigator.clipboard.writeText(copyText);
    alert('Link copied!');
  };

  const handleFavorite = (typer) => {
    if (typer === 'drinks') {
      const localStorage = detail.map((recipe) => (
        {
          id: recipe.idDrink,
          type: 'drink',
          nationality: '',
          category: recipe.strCategory,
          alcoholicOrNot: recipe.strAlcoholic,
          name: recipe.strDrink,
          image: recipe.strDrinkThumb,
        }
      ));
      window.localStorage.setItem('favoriteRecipes', JSON.stringify(localStorage));
    } else if (typer === 'foods') {
      const localStorage = detail.map((recipe) => (
        {
          id: recipe.idMeal,
          type: 'food',
          nationality: recipe.strArea,
          category: recipe.strCategory,
          alcoholicOrNot: '',
          name: recipe.strMeal,
          image: recipe.strMealThumb,
        }
      ));
      window.localStorage.setItem('favoriteRecipes', JSON.stringify(localStorage));
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
            <Link
              data-testid="start-recipe-btn"
              to={ `/${type}/${id}/in-progress` }
              position="static"
              style={ { position: 'fixed', bottom: '0px' } }
            >
              Continue Recipe
            </Link>
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
            <h4>Category</h4>
            <p data-testid="recipe-category">{item.strAlcoholic}</p>
            <h4> Intructions </h4>
            <p data-testid="instructions">{item.strInstructions}</p>
            <h4>Ingridients</h4>
            <ul>{handleIngMeaDrink(Object.entries(item))}</ul>
            <DetailCards typeOf={ type } />
            <Link
              data-testid="start-recipe-btn"
              to={ `/${type}/${id}/in-progress` }
              position="static"
              style={ { position: 'fixed', bottom: '0px' } }
            >
              Continue Recipe
            </Link>
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
