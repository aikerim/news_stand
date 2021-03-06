import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import loggedIn from './reducers/appReducer';

export default createStore(
  combineReducers({ loggedIn }),
  {},
  applyMiddleware(createLogger(), thunk, promise()),
);
