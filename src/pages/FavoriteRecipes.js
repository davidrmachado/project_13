import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

function FavoriteRecipes() {
  const {
    setTitle,
  } = useContext(AppContext);
  useEffect(() => {
    document.title = 'Favorite Recipes';
    setTitle(document.title); // ?
  }, []);
  return (
    <Header />
  );
}

export default FavoriteRecipes;
