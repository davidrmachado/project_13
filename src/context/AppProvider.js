import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  // const [buttonIsDisabled, setButtonIsDisabled] = useState(true);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [globalRecipes, setGlobalRecipes] = useState({});

  const context = {
    title,
    setTitle,
    searchInput,
    setSearchInput,
    globalRecipes,
    setGlobalRecipes,
  };

  return (
    <AppContext.Provider value={ context }>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default AppProvider;
