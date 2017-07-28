import axios from "axios";

import {
  LOAD_BEERS,
  LOAD_BEERS_ERROR,
  LOAD_BEERS_SUCCESS
} from "../constants";

export const loadBeers = (currentPage = 1) => {
  return dispatch => {
    dispatch({
      type: LOAD_BEERS,
      payload: {
        isLoading: true
      }
    });

    axios
      .get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=6`)
      .then(response => {
        dispatch({
          type: LOAD_BEERS_SUCCESS,
          payload: {
            isLoading: false,
            currentPage: currentPage,
            beers: response.data
          }
        });
      })
      .catch(() => {
        dispatch({
          type: LOAD_BEERS_ERROR
        });
      });
  };
};
