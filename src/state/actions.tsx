import * as constants from './constants';

export interface IAddInterest {
  type: constants.ADD_INTEREST;
  value: string;
}

export interface IRemoveInterest {
  type: constants.REMOVE_INTEREST;
  value: string;
}

export type InterestAction = IAddInterest | IRemoveInterest;

export const addInterest = (value: string): IAddInterest => ({
  type: constants.ADD_INTEREST,
  value,
});

export const removeInterest = (value: string): IRemoveInterest => ({
  type: constants.REMOVE_INTEREST,
  value,
});
