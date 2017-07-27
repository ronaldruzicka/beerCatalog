import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardImg, CardBlock, CardTitle, CardText } from 'reactstrap';

const BeerCard = (props) => {
  const { id, imgUrl, name, tagline } = props;

  return (
    <Card className='mb-4' key={ id }>
      <CardImg className='w-25 mx-auto' top width="100%" src={ imgUrl ? imgUrl : 'http://satyr.io/140x240' } alt={ name }/>
      <CardBlock>
        <CardTitle>{ name }</CardTitle>
        <CardText>{ tagline }</CardText>
      </CardBlock>
    </Card>
  );
};

BeerCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired
};

export default BeerCard;
