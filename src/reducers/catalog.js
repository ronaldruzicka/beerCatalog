import { INIT_BEERS_SUCCESS } from '../constants';

export default (state = [], action) =>  {
  const { type, payload } = action;

  switch (type) {
    case INIT_BEERS_SUCCESS:
      const { beers } = payload;

      return Array.prototype.concat(state, beers);

    default:
      return state;
  }
}
