import { RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';
import { interestReducer } from './reducers';
import { InterestsState } from './types';

const rootReducer = combineReducers({
  interests: interestReducer,
});

export interface IRootState {
  interests: InterestsState;
  router: RouterState;
}

export default rootReducer;
