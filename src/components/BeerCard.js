import React from 'react';
import PropTypes from 'prop-types';

import { Thumbnail } from 'react-bootstrap';



const BeerCard = (props) => {
  const { id, imgUrl, name, tagline } = props;

  return (
    <Thumbnail className='mb-4' key={ id } src={ imgUrl ? imgUrl : 'http://satyr.io/242x200' } alt={ name }>
      <h3>{ name }</h3>
      <p>{ tagline }</p>
    </Thumbnail>
  );
};

BeerCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
};

export default BeerCard;
