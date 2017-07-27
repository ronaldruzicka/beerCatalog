import React from 'react';
import { connect } from 'react-redux';

import { initBeers } from './actions/catalog';

import { Grid } from 'react-bootstrap';

import './App.css';

import Catalog from './components/Catalog';
// import Loader from './components/Loader';

class App extends React.Component {
  componentDidMount() {
    const { initBeers } = this.props;

    initBeers();
  }

  render() {
    const { beers } = this.props;

    return (
      <Grid>
        <h1 className="font-weight-bold mr-2">Beer catalog <span className="h2 text-muted">find your beer</span></h1>
        <Catalog beers={ beers } />
      </Grid>
    );
  }
}

export default connect(state => {
  const { beers } = state;
  return { beers };
}, {
  initBeers
})(App);
