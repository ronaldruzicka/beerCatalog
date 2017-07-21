import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col, Card, CardImg, CardBlock, CardTitle, CardText } from "reactstrap";
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Catalog = props => {
  const { beers } = props;

  const beersList = beers.map(beer => {
    return (
      <Col md="3" key={ beer.id }>
        <Card>
          <CardImg top width="100%" src={ beer.image_url } alt={ beer.name } />
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
