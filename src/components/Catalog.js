import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';

import BeerCard from './BeerCard';

export default class Catalog extends Component {
  render() {
    const { beers } = this.props;

    const beersList = beers.map(beer => {
      const { id, image_url, name, tagline } = beer;

      return (
        <Col sm={6} md={4} key={id}>
          <BeerCard id={id} imgUrl={image_url} name={name} tagline={tagline} />
        </Col>
      )
    });

    return (
      <Grid>
        <Row>
          { beersList }
        </Row>
      </Grid>
    );
  }
};

Catalog.propTypes = {
  beers: PropTypes.array.isRequired
};
