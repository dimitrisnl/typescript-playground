import * as constants from './constants';

export interface IAddThing {
  type: constants.ADD_THING;
  value: string;
}

export interface IRemoveThing {
  type: constants.REMOVE_THING;
  uuid: string;
}

export type ThingAction = IAddThing | IRemoveThing;

export const addThing = (value: string): IAddThing => ({
  type: constants.ADD_THING,
  value,
});

export const removeThing = (uuid: string): IRemoveThing => ({
  type: constants.REMOVE_THING,
  uuid,
});
