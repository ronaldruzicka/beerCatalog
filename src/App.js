import React from "react";
import axios from "axios";

import Catalog from "./components/Catalog";

import "./App.css";

export default class App extends React.Component {
  state = {
    beers: []
  };

  componentWillMount() {
    axios
      .get('https://api.punkapi.com/v2/beers?page=1&per_page=6')
      .then(response => {
        this.setState({
          beers: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { beers } = this.state;

    return (
      <div className="container">
        <div className="d-flex align-items-baseline">
          <h1 className="font-weight-bold mr-2">Beer catalog</h1>
          <h2 className="text-muted">find your beer</h2>
        </div>

        <Catalog beers={ beers } />
      </div>
    );
  }
}
