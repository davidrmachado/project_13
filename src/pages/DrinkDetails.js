import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import RecipeDetails from '../components/RecipeDetails';
import Footer from '../components/Footer';

function DrinkDetails() {
  const {
    setTitle,
    // id,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Drink Details';
    setTitle(document.title); // ?
  }, []);

  return (
    <div>
      <h1>{ document.title }</h1>
      <RecipeDetails type="drinks" id={ id } />
      <Footer />
    </div>
  );
}

export default DrinkDetails;
