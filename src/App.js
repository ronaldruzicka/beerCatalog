import React from 'react';
import { connect } from 'react-redux';

import { loadBeers } from './actions/catalog';

import { Grid, Pagination } from 'react-bootstrap';

import './App.css';

import Catalog from './components/Catalog';
import Loader from './components/Loader';

class App extends React.Component {
  componentDidMount() {
    const { loadBeers } = this.props;

    loadBeers();
  }

  changePage = (page) => {
    const { loadBeers } = this.props;

    console.log(page);
    loadBeers(page);
  }

  render() {
    const { isLoading, beers, currentPage } = this.props.catalog;

    const content = isLoading ? <Loader /> : <Catalog beers={ beers } />;

    return (
      <Grid>
        <h1 className="font-weight-bold mr-2">Beer catalog <span className="h2 text-muted">find your beer</span></h1>
        <hr />
        <Pagination
          items={20}
          next
          prev
          first
          last
          boundaryLinks
          maxButtons={5}
          activePage={currentPage}
          onSelect={this.changePage} />
        {content}
      </Grid>
    );
  }
}

export default connect(state => {
  console.log(state);
  const { catalog } = state;

  return { catalog };
}, {
  loadBeers
})(App);
