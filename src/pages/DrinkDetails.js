import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import RecipeDetails from '../components/RecipeDetails';

function DrinkDetails() {
  const {
    setTitle,
    id,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Drink Details';
    setTitle(document.title); // ?
  }, []);
  return (
    <RecipeDetails type="drinks" id={ id } />
  );
}

export default DrinkDetails;
