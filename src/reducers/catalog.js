import { LOAD_BEERS, LOAD_BEERS_SUCCESS, GET_SAVED_BEERS } from '../constants';

const defaultState = {
  isLoading: true,
  pages: [
    {
      id: null,
      beers: []
    }
  ]
};

export default (state = defaultState, action = {}) => {
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
        pages: [
          ...state.pages,
          {
            id: payload.currentPage,
            beers: payload.beers
          }
        ]
      };

      case GET_SAVED_BEERS:
        return {
          ...state,
          isLoading: payload.isLoading,
          currentPage: payload.currentPage
        }

    default:
      return state;
  }
};
