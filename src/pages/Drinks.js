import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import Footer from '../components/Footer';

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
      <Recipes type="drinks" />
      <Footer />
    </>
  );
}

export default Drinks;
