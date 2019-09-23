import { combineReducers, Reducer } from 'redux';

export const createRootReducer = (): Reducer => combineReducers({});
export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;
