import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'reactstrap';

import BeerCard from './BeerCard';

export default class Catalog extends Component {
  render() {
    const { beers } = this.props;

    const beersList = beers.map(beer => {
      const { id, image_url, name, tagline } = beer;

      return (
        <Col md='4' key={id}>
          <BeerCard id={id} imgUrl={image_url} name={name} tagline={tagline} />
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
  }
};

Catalog.propTypes = {
  beers: PropTypes.array.isRequired
};
