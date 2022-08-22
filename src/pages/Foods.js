import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';

function Foods() {
  const { setTitle } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Foods';
    setTitle(document.title); // ?
  }, []);
  return (
    <Header />
  );
}

export default Foods;
