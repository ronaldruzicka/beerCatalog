import { LOAD_BEERS, LOAD_BEERS_SUCCESS } from '../constants';

export default (state = { isLoading: true, beers: [] }, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_BEERS:
      return {
        ...state,
        isLoading: payload.isLoading
      };

    case LOAD_BEERS_SUCCESS:
      return {
        ...state,
        isLoading: payload.isLoading,
        currentPage: payload.currentPage,
        beers: payload.beers
      };

    default:
      return state;
  }
};
