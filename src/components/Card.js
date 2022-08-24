import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function Card({ name, thumb, index, type, id }) {
  const history = useHistory();
  function redirectToDetails() {
    if (type === 'foods') {
      history.push(`/foods/${id}`);
    } else {
      history.push(`/drinks/${id}`);
    }
  }
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <button type="button" onClick={ redirectToDetails }>
        <legend data-testid={ `${index}-card-name` }>
          {name}
        </legend>
        <img
          src={ thumb }
          alt={ `${name} recipe.` }
          data-testid={ `${index}-card-img` }
          style={ { width: '200px', height: '200px' } }
        />
      </button>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  thumb: PropTypes.string,
  index: PropTypes.number,
  id: PropTypes.number,
}.isRequired;

export default Card;
