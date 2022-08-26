import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import RecipeDetails from '../components/RecipeDetails';

function DrinkDetails() {
  const {
    setTitle,
    // idProgress,
    // setidProgress,
  } = useContext(AppContext);

  const history = useHistory();
  const { pathname } = history.location;
  const id = pathname.replace(/\D/g, '');

  useEffect(() => {
    document.title = 'Drink Details';
    setTitle(document.title);
    // const id = pathname.replace(/\D/g, '');
    // setidProgress(id);
  }, []);

  return (
    <div>
      <h1>{ document.title }</h1>
      <RecipeDetails type="drinks" id={ id } />
    </div>
  );
}

export default DrinkDetails;
