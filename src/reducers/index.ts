import { combineReducers, Reducer } from 'redux';
import concerts from './concerts';

export const createRootReducer = (): Reducer => combineReducers({ concerts });
export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;
