import { t } from './constants';

export interface IAddInterest {
  type: t.ADD_INTEREST;
  value: string;
}

export interface IRemoveInterest {
  type: t.REMOVE_INTEREST;
  value: string;
}

export type ActionTypes = IAddInterest | IRemoveInterest;

export const addInterest = (value: string): IAddInterest => ({
  type: t.ADD_INTEREST,
  value,
});

export const removeInterest = (value: string): IRemoveInterest => ({
  type: t.REMOVE_INTEREST,
  value,
});
