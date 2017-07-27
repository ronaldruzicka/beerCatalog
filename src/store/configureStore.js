import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';

const enhancer = applyMiddleware(thunk, logger);

export default createStore(rootReducer, {}, enhancer);
