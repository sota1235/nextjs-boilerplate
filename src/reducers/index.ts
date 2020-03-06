import { combineReducers, Reducer } from 'redux';
import concerts from './concerts';
import { router } from './router';

export const createRootReducer = (): Reducer =>
  combineReducers({ concerts, router });
export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;
