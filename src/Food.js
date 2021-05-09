import React from 'react';
import PropTypes from 'prop-types';

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>{name}</h2>
      <h4>{rating}</h4>
      <img src={picture} alt="" />
    </div>
  )  
}

export default Food;