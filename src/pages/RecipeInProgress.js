import React, { useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { foodDetailAPI } from '../services/foodAPI';
import { drinkDetailAPI } from '../services/drinkAPI';
import DetailCards from '../components/DetailCard';

function FoodInProgress() {
  const {
    idProgress,
    setidProgress,
    tipo,
    detail,
    doneRecipe,
    startedRecipe,
    setTipo,
    setDetail,
  } = useContext(AppContext);

  const history = useHistory();
  const { pathname } = history.location;

  async function getFoodDetails() {
    const id = pathname.replace(/\D/g, '');
    const { meals } = await foodDetailAPI(id);
    setDetail(meals);
    setidProgress(id);
  }

  async function getDrinkDetails() {
    const id = pathname.replace(/\D/g, '');
    const { drinks } = await drinkDetailAPI(id);
    setidProgress(id);
    setDetail(drinks);
  }

  useEffect(() => {
    if (pathname.includes('foods')) {
      setTipo('foods');
      getFoodDetails();
    } else if (pathname.includes('drinks')) {
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
        <li key={ index } data-testid={ `${index}-ingredient-step` }>
          <input
            key={ index }
            type="checkbox"
          />
          {string}
        </li>
      )));
  };

  if (pathname.includes('foods')) {
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
            <p data-testid="recipe-category">
              {item.strCategory}
            </p>

            <h4> Intructions </h4>
            <p data-testid="instructions">
              {item.strInstructions}
            </p>

            <h4>Ingridients</h4>
            <ul>
              {handleIngMeaDrink(Object.entries(item))}
            </ul>
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
            <button
              type="button"
              data-testid="finish-recipe-btn"
            >
              Finish recipe
            </button>

            <h4>Recomended Drinks</h4>
            <DetailCards typeOf={ tipo } />
          </div>

        ))}
        {!doneRecipe
            && (
              startedRecipe
                ? (
                  <Link
                    data-testid="start-recipe-btn"
                    to={ `/${tipo}/${idProgress}/in-progress` }
                  >
                    Continue Recipe
                  </Link>
                )
                : (
                  <Link
                    data-testid="start-recipe-btn"
                    to={ `/${tipo}/${idProgress}/in-progress` }
                  >
                    Start Recipe
                  </Link>
                )
            )}
      </div>
    );
  }
  if (pathname.includes('drinks')) {
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
            <h4>Is alcoholic?</h4>
            <p>
              {item.strAlcoholic}
            </p>
            <h4>Category</h4>
            <p data-testid="recipe-category">
              {item.strCategory}
            </p>
            <h4> Intructions </h4>
            <p data-testid="instructions">
              {item.strInstructions}
            </p>
            <h4>Ingridients</h4>
            <ul>
              {handleIngMeaDrink(Object.entries(item))}
            </ul>

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
            <button
              type="button"
              data-testid="finish-recipe-btn"
            >
              Finish recipe
            </button>
            <DetailCards typeOf={ tipo } />
            {!doneRecipe
            && (
              startedRecipe
                ? (
                  <Link
                    data-testid="start-recipe-btn"
                    to={ `/${tipo}/${idProgress}/in-progress` }
                  >
                    Continue Recipe
                  </Link>
                )
                : (
                  <Link
                    data-testid="start-recipe-btn"
                    to={ `/${tipo}/${idProgress}/in-progress` }
                  >
                    Start Recipe
                  </Link>
                )
            )}
          </div>

        ))}
      </div>
    );
  }
}

export default FoodInProgress;
