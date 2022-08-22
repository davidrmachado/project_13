import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function FoodDetails() {
  const {
    setTitle,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Food Details';
    setTitle(document.title); // ?
  }, []);
  return (
    <h1>food details</h1>
  );
}

export default FoodDetails;
