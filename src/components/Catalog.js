import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Card, CardImg, CardBlock, CardTitle, CardText } from "reactstrap";

const Catalog = props => {
  const { beers } = props;

  const beersList = beers.map(beer => {
    return (
      <Col md="4" key={ beer.id }>
        <Card className='mb-4'>
          <CardImg className='w-25 mx-auto' top width="100%" src={ beer.image_url || 'http://satyr.io/140x240' } alt={ beer.name }/>
          <CardBlock>
            <CardTitle>{ beer.name }</CardTitle>
            <CardText>{ beer.tagline }</CardText>
          </CardBlock>
        </Card>
      </Col>
    )
  });

  return (
    <Container>
      <Row>
        { beersList }
      </Row>
    </Container>
  );
};

Catalog.propTypes = {
  beers: PropTypes.array.isRequired
};

export default Catalog;
