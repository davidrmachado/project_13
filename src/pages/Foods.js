import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import AppContext from '../context/AppContext';
import Footer from '../components/Footer';

function Foods() {
  const { setTitle } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Foods';
    setTitle(document.title); // ?
  }, []);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Foods;
