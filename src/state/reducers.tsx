import * as shortid from 'shortid';
import { ActionTypes } from './actions';
import { t } from './constants';
import { InterestsState } from './types';

export const interestReducer = (
  state: InterestsState = [],
  action: ActionTypes
): InterestsState => {
  switch (action.type) {
    case t.ADD_INTEREST:
      return [...state, { uuid: shortid.generate(), name: action.value }];
    case t.REMOVE_INTEREST:
      return state.filter(x => x.uuid !== action.value);
    default:
      return state;
  }
};
