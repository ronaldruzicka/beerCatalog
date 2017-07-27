import { INIT_BEERS, INIT_BEERS_SUCCESS } from '../constants';

export default (state = { isLoading: true, beers: [] }, action = {}) =>  {
  const { type, payload } = action;

  switch (type) {
    case INIT_BEERS:
      return {
        ...state,
        isLoading: payload.isLoading
      };

    case INIT_BEERS_SUCCESS:
      return {
        ...state,
        isLoading: payload.isLoading,
        beers: payload.beers
      };

    default:
      return state;
  }
}
