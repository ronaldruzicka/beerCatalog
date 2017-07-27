import { combineReducers } from 'redux';

import beers from './catalog';

const rootReducer = combineReducers ({
  beers
});

export default rootReducer;
