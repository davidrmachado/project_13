import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';

function Profile() {
  const {
    setTitle,
  } = useContext(AppContext);

  useEffect(() => {
    document.title = 'Profile';
    setTitle(document.title); // ?
  }, []);
  return (
    <Header />
  );
}

export default Profile;
