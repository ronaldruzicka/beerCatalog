import React, { Component } from 'react';

import Catalog from './components/Catalog.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex align-items-baseline">
          <h1 className="font-weight-bold">Beer catalog</h1>
          <h2 className="text-muted">find your beer</h2>
        </div>
        <Catalog />
      </div>
    );
  }
}

export default App;
