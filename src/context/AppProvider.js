import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [title, setTitle] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [renderCards, setRenderCards] = useState([]);
  const [id, setId] = useState('');
  const [detail, setDetail] = useState([]);
  const [doneRecipe, setDoneRecipe] = useState(false);
  const [startedRecipe, setStartedRecipe] = useState(false);
  const [globalRecipes, setGlobalRecipes] = useState({});
  const [tipo, setTipo] = useState();
  const [idProgress, setidProgress] = useState();
  const [inProgressRecipes, setInProgressRecipes] = useState([]);

  const context = {
    idProgress,
    setidProgress,
    tipo,
    setTipo,
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
    doneRecipe,
    setDoneRecipe,
    startedRecipe,
    setStartedRecipe,
    inProgressRecipes,
    setInProgressRecipes,
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
