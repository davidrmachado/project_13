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
        alt={ `foto e receita de ${name} ` }
        data-testid={ `${index}-card-img` }
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
