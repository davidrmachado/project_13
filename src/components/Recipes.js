import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchMeals, fetchMealsCategories, searchFoods } from '../services/foodAPI';
import { fetchDrinks, fetchDrinksCategories } from '../services/drinkAPI';
import Card from './Card';

function Recipes({ type }) {
  const MAX_RECIPES = 11;
  const MAX_CATEGORIES = 4;

  const [categories, setCategories] = useState([]);
  const [firstRecipes, setFirstRecipes] = useState([]);

  async function fetchMealsAPI() {
    const meals = await fetchMeals();
    setFirstRecipes(meals.filter((meal, index) => index <= MAX_RECIPES));
    const mealsCategories = await fetchMealsCategories();
    setCategories(mealsCategories.filter((meal, index) => index <= MAX_CATEGORIES));
  }

  async function fetchDrinksAPI() {
    const drinks = await fetchDrinks();
    setFirstRecipes(drinks.filter((meal, index) => index <= MAX_RECIPES));
    const drinksCategories = await fetchDrinksCategories();
    setCategories(drinksCategories.filter((meal, index) => index <= MAX_CATEGORIES));
  }

  function resetFilters() {
    if (type === 'foods') {
      fetchMealsAPI();
    } else {
      fetchDrinksAPI();
    }
  }

  useEffect(() => {
    resetFilters();
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

  async function filter(value) {
    const filteredFoods = await searchFoods(type, value);
    if (type === 'foods') {
      const { meals } = filteredFoods;
      setFirstRecipes(meals.filter((meal, index) => index <= MAX_RECIPES));
    } else {
      const { drinks } = filteredFoods;
      setFirstRecipes(drinks.filter((meal, index) => index <= MAX_RECIPES));
    }
  }

  return (
    <div>
      <section>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ resetFilters }
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={ category.strCategory }
            type="button"
            data-testid={ `${category.strCategory}-category-filter` }
            onClick={ () => { filter(category.strCategory); } }
          >
            {category.strCategory}
          </button>))}
      </section>
      {
        type === 'foods'
          ? firstRecipes.map((meal, index) => mealsMap(meal, index))
          : firstRecipes.map((drink, index) => drinksMap(drink, index))
      }
    </div>
  );
}

Recipes.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default Recipes;
