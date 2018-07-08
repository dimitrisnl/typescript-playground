import * as shortid from 'shortid';
import { ActionTypes } from './actions';
import { t } from './constants';
import { IStoreState } from './types';

export const interestState = {
  interests: [],
};

export const interestReducer = (
  state: IStoreState,
  action: ActionTypes
): IStoreState => {
  switch (action.type) {
    case t.ADD_INTEREST:
      return {
        ...state,
        interests: [
          ...state.interests,
          { uuid: shortid.generate(), name: action.value },
        ],
      };
    case t.REMOVE_INTEREST:
      return {
        ...state,
        interests: state.interests.filter(x => x.uuid !== action.value),
      };
  }
  return state;
};
