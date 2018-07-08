import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { ActionTypes } from './actions';
import { interestReducer, interestState } from './reducers';
import { IStoreState } from './types';

const store = createStore<IStoreState, ActionTypes, any, null>(
  interestReducer,
  interestState,
  applyMiddleware(logger)
);

export default store;
