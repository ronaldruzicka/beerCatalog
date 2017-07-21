import React from "react";
import axios from "axios";

import Catalog from "./components/Catalog";

import "./App.css";

import api from "./api";

export default class App extends React.Component {
  state = {
    beers: []
  };

  componentWillMount() {
    // this.setState({
    //   beers: api
    // });

    axios
      .get('https://api.punkapi.com/v2/beers')
      .then(response => {
        console.log('response: ', response);
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

    console.log("beers state: ", beers);

    return (
      <div className="container">
        <div className="d-flex align-items-baseline">
          <h1 className="font-weight-bold mr-2">Beer catalog</h1>
          <h2 className="text-muted">find your beer</h2>
        </div>

        <Catalog beers={beers} />
      </div>
    );
  }
}
