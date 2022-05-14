import { combineReducers, Reducer } from '@reduxjs/toolkit';
import concerts from './concerts';
import { router } from './router';

export type AppState = {
  concerts: ReturnType<typeof concerts>;
  router: ReturnType<typeof router>;
};
export const createRootReducer = (): Reducer =>
  combineReducers<AppState>({ concerts, router });
