import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const {
    setTitle,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Profile';
    setTitle(document.title); // ?
  }, []);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default Profile;
