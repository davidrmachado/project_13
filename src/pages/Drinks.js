import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Drinks() {
  const {
    setTitle,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Drinks';
    setTitle(document.title); // ?
  }, []);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Drinks;
