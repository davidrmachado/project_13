import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { foodDetailAPI } from '../services/foodAPI';
import AppContext from '../context/AppContext';

function RecipeDetails({ id }) {
  const {
    detail,
    setDetail,
  } = useContext(AppContext);
  async function getFoodDetails() {
    const { strMeal } = await foodDetailAPI(id);
    setDetail(strMeal);
    return strMeal;
  }

  useEffect(() => {
    getFoodDetails();
  }, []);

  return (
    <div>
      <h1>{detail}</h1>
    </div>
  );
}

RecipeDetails.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipeDetails;
