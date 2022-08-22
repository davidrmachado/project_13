import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';

function Drinks() {
  const {
    setTitle,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Drinks';
    setTitle(document.title); // ?
  }, []);
  return (
    <Header />
  );
}

export default Drinks;
