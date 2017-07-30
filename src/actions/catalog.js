import axios from "axios";

import {
  LOAD_BEERS,
  LOAD_BEERS_ERROR,
  LOAD_BEERS_SUCCESS,
  GET_SAVED_BEERS
} from "../constants";

export const loadBeers = (currentPage = 1) => {
  return (dispatch, getState) => {
    const { pages } = getState().catalog;

    const beersInStore = pages.find((page) => {
      if (page.id === currentPage) {
        return page.beers;
      }

      return false;
    });

    if (typeof beersInStore === 'object') {
      dispatch({
        type: GET_SAVED_BEERS,
        payload: {
          isLoading: false,
          currentPage: currentPage,
          beers: beersInStore
        }
      });
    } else {
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
        .catch((error) => {
          dispatch({
            type: LOAD_BEERS_ERROR,
            payload: {
              isLoading: false,
              message: error || 'Please try to turn if off and on again.'
            }
          });
        });
    }


  };
};
