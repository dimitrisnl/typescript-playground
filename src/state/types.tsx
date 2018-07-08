export interface Item {
  uuid: string;
  value: string;
}

export interface IStoreState {
  things: Item[];
}
