import axios from 'axios';

import { INIT_BEERS_SUCCESS, INIT_BEERS_ERROR } from '../constants';

export const initBeers = () => {
  return dispatch => {
    setTimeout(() => {
      axios
      .get('https://api.punkapi.com/v2/beers?page=1&per_page=6')
      .then(response => {
        dispatch({
          type: INIT_BEERS_SUCCESS,
          payload: {
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
