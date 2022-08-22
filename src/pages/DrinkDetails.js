import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function DrinkDetails() {
  const {
    setTitle,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Drink Details';
    setTitle(document.title); // ?
  }, []);
  return (
    <h1>drink details</h1>
  );
}

export default DrinkDetails;
