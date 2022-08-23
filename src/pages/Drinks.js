import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Recipes from '../components/Recipes';

function Drinks() {
  const {
    setTitle,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Drinks';
    setTitle(document.title); // ?
  }, []);
  return (
    <div>
      <Header />
      <Recipes type="drinks" />
    </div>
  );
}

export default Drinks;
