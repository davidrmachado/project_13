import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import RecipeDetails from '../components/RecipeDetails';
import Footer from '../components/Footer';

function FoodDetails() {
  const {
    setTitle,
    // id,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Food Details';
    setTitle(document.title);
  }, []);

  return (
    <div>
      <h1>{ document.title }</h1>
      <RecipeDetails type="foods" id={ id } />
      <Footer />
    </div>
  );
}

export default FoodDetails;
