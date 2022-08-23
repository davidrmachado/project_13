import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import Recipes from '../components/Recipes';

function Foods() {
  const {
    setTitle,
  } = useContext(AppContext);
  useEffect(() => {
    document.title = 'Foods';
    setTitle(document.title); // ?
  }, []);

  return (
    <div>
      <Header />
      <Recipes type="foods" />
    </div>

  );
}

export default Foods;
