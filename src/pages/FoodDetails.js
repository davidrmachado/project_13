import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import RecipeDetails from '../components/RecipeDetails';

function FoodDetails() {
  const {
    setTitle,
  } = useContext(AppContext);

  const history = useHistory();
  const { pathname } = history.location;
  const id = pathname.replace(/\D/g, '');

  useEffect(() => {
    document.title = 'Food Details';
    setTitle(document.title);
  }, []);

  return (
    <div>
      <h1>{ document.title }</h1>
      <RecipeDetails type="foods" id={ id } />
    </div>
  );
}

export default FoodDetails;
