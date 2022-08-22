import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function FoodInProgress() {
  const {
    setTitle,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Food In Progress';
    setTitle(document.title); // ?
  }, []);
  return (
    <h1>food in progress</h1>
  );
}

export default FoodInProgress;
