import { createStore } from 'redux';
// import logger from 'redux-logger';
import { ThingAction } from './actions';
import { thing } from './reducers';
import { IStoreState } from './types';

// const loggerMiddleware = (logger as any)();

const store = createStore<IStoreState, ThingAction, null, null>(thing, {
  things: [],
  // applyMiddleware(logger),
  // null
});

export default store;
