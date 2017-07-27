import React from 'react';
import { connect } from 'react-redux';

import { initBeers } from './actions/catalog';

import Catalog from './components/Catalog';
import Loader from './components/Loader';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    const { initBeers } = this.props;

    initBeers();
  }

  render() {
    const { beers } = this.props;

    return (
      <div className="container">
        <div className="d-flex align-items-baseline">
          <h1 className="font-weight-bo`ld mr-2">Beer catalog</h1>
          <h2 className="text-muted">find your beer</h2>
        </div>

        <Catalog beers={ beers } />
      </div>
    );
  }
}

export default connect(state => {
  const { beers } = state;
  return { beers };
}, {
  initBeers
})(App);
