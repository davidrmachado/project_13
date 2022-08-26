import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import RecipeDetails from '../components/RecipeDetails';

function DrinkDetails() {
  const {
    setTitle,
    // id,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Drink Details';
    setTitle(document.title);
  }, []);

  return (
    <div>
      <h1>{ document.title }</h1>
      <RecipeDetails type="drinks" id="178319" />
    </div>
  );
}

export default DrinkDetails;
