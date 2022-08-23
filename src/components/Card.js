import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, thumb, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <legend data-testid={ `${index}-card-name` }>
        {name}
      </legend>
      <img
        src={ thumb }
        alt={ `${name} recipe.` }
        data-testid={ `${index}-card-img` }
        style={ { width: '200px', height: '200px' } }
      />
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default Card;
