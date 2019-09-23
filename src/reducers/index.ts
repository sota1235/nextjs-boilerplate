import { combineReducers } from "redux";

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;
export const createRootReducer = () => combineReducers({});