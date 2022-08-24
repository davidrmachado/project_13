import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DrinkCards from '../components/DrinkCards';

function Drinks() {
  const {
    setTitle,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Drinks';
    setTitle(document.title);
  }, []);
  return (
    <>
      <Header />
      <DrinkCards />
      <Footer />
    </>
  );
}

export default Drinks;
