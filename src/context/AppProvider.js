import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [title, setTitle] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [renderCards, setRenderCards] = useState([]);
  const [id, setId] = useState('');
  const [detail, setDetail] = useState([]);
  const [globalRecipes, setGlobalRecipes] = useState({});

  const context = {
    title,
    setTitle,
    searchInput,
    setSearchInput,
    renderCards,
    setRenderCards,
    globalRecipes,
    setGlobalRecipes,
    id,
    setId,
    detail,
    setDetail,
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
