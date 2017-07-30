import React from 'react';
import { connect } from 'react-redux';

import { loadBeers } from './actions/catalog';

import { Grid, Pagination } from 'react-bootstrap';

import './App.css';

import Catalog from './components/Catalog';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';

class App extends React.Component {
  componentDidMount() {
    const { loadBeers } = this.props;

    loadBeers();
  }

  changePage = (page) => {
    const { loadBeers } = this.props;

    loadBeers(page);
  }

  hideErrorMessage = () => {
    this.setState({
      errorMessage: false
    })
  }

  render() {
    const { loadBeers } = this.props;
    const { isLoading, pages, currentPage, errorMessage  } = this.props.catalog;
    let filteredBeers;

    // get beers from state which correspond with the current page
    pages.forEach((page) => {
      if (page.id === currentPage) {
        filteredBeers = page.beers;
      }
    });

    if (errorMessage) {
      return (
        <ErrorMessage message={errorMessage} onDismiss={this.hideErrorMessage} loadBeers={loadBeers} />
      )
    }

    const content = isLoading ? <Loader /> : <Catalog beers={ filteredBeers } />;

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
        { content }
      </Grid>
    );
  }
}

export default connect(state => {
  const { catalog } = state;

  return { catalog };
}, {
  loadBeers
})(App);


