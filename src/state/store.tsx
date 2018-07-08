import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { InterestAction } from './actions';
import { interestReducer, interestState } from './reducers';
import { IStoreState } from './types';

const store = createStore<IStoreState, InterestAction, any, null>(
  interestReducer,
  interestState,
  applyMiddleware(logger)
);

export default store;
