import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchMeals } from '../services/foodAPI';
import fetchDrinks from '../services/drinkAPI';
import Card from './Card';

function Recipes({ type }) {
  const MAXIMUM_CARDS = 12;
  const [firstRecipes, setFirstRecipes] = useState([]);

  async function fetchMealsAPI() {
    const meals = await fetchMeals();
    setFirstRecipes(meals.splice(0, MAXIMUM_CARDS));
  }

  async function fetchDrinksAPI() {
    const drinks = await fetchDrinks();
    setFirstRecipes(drinks.splice(0, MAXIMUM_CARDS));
  }

  useEffect(() => {
    if (type === 'foods') {
      fetchMealsAPI();
    } else {
      fetchDrinksAPI();
    }
  }, []);

  function mealsMap(meal, index) {
    return (
      <Card
        key={ meal.idMeal }
        name={ meal.strMeal }
        thumb={ meal.strMealThumb }
        index={ index }
      />
    );
  }

  function drinksMap(drink, index) {
    return (
      <Card
        key={ drink.idDrink }
        name={ drink.strDrink }
        thumb={ drink.strDrinkThumb }
        index={ index }
      />
    );
  }

  return (
    <div>
      {
        type === 'foods' ? firstRecipes.map((meal, index) => mealsMap(meal, index))
          : firstRecipes.map((drink, index) => drinksMap(drink, index))
      }
    </div>
  );
}

Recipes.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default Recipes;
