import { v4 as generateId } from 'uuid';
import { InterestAction } from './actions';
import { ADD_INTEREST, REMOVE_INTEREST } from './constants';
import { IStoreState } from './types';

export const interestState = {
  interests: [],
};

export const interestReducer = (
  state: IStoreState,
  action: InterestAction
): IStoreState => {
  switch (action.type) {
    case ADD_INTEREST:
      return {
        ...state,
        interests: [
          ...state.interests,
          { uuid: generateId(), name: action.value },
        ],
      };
    case REMOVE_INTEREST:
      return {
        ...state,
        interests: state.interests.filter(x => x.uuid !== action.value),
      };
  }
  return state;
};
