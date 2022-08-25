import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import DetailCards from '../components/DetailCard';

function FoodInProgress() {
  const {
    idProgress,
    tipo,
    setTitle,
    detail,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Food In Progress';
    setTitle(document.title);
  }, []);

  if (tipo === 'foods') {
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

            <h4>Recomended Drinks</h4>
            <DetailCards typeOf={ tipo } />

            <h4>YouTube Video</h4>
            {handleYoutube(item.strYoutube)}
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
  } if (tipo === 'drinks') {
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
            <h4> Intructions </h4>
            <p data-testid="instructions">
              {item.strInstructions}
            </p>
            <h4>Ingridients</h4>
            <ul>
              {handleIngMeaDrink(Object.entries(item))}
            </ul>
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
