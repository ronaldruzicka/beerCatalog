import axios from 'axios';

import { INIT_BEERS, INIT_BEERS_SUCCESS, INIT_BEERS_ERROR } from '../constants';

export const initBeers = () => {
  return dispatch => {
    dispatch({
      type: INIT_BEERS,
      payload: {
        isLoading: true
      }
    });

    setTimeout(() => {
      axios
      .get('https://api.punkapi.com/v2/beers?page=1&per_page=6')
      .then(response => {
        dispatch({
          type: INIT_BEERS_SUCCESS,
          payload: {
            isLoading: false,
            beers: response.data
          }
        })
      })
      .catch(() => {
        dispatch({
          type: INIT_BEERS_ERROR
        })
      });
    }, 2000);
  };
};
