import { v4 as generateId } from 'uuid';
import { ThingAction } from './actions';
import { ADD_THING, REMOVE_THING } from './constants';
import { IStoreState } from './types';

export const thing = (state: IStoreState, action: ThingAction): IStoreState => {
  console.log(action);
  switch (action.type) {
    case ADD_THING:
      return {
        ...state,
        things: [...state.things, { uuid: generateId(), value: action.value }],
      };
    case REMOVE_THING:
      return {
        ...state,
        things: state.things.filter(x => x.uuid !== action.uuid),
      };
  }
  return state;
};
