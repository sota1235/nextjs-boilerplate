import { createStore, Reducer, Store } from 'redux';

export const getStore = (reducer: Reducer, initialState?: {}): Store => {
  return createStore(reducer, initialState);
};
