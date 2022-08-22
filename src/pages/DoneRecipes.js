import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';

function DoneRecipes() {
  const {
    setTitle,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Done Recipes';
    setTitle(document.title); // ?
  }, []);
  return (
    <Header />
  );
}

export default DoneRecipes;
