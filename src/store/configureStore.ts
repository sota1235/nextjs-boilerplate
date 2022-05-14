import {
  configureStore,
  PreloadedState,
  Reducer,
  Store,
} from '@reduxjs/toolkit';
import middleware from '../middlewares';
import { AppState } from '../reducers';
import { ActionTypes } from '../actions/actionTypes';

export function getStore(
  reducer: Reducer,
  initialState?: PreloadedState<AppState>,
): Store<AppState, ActionTypes> {
  return configureStore<AppState, ActionTypes, typeof middleware>({
    reducer,
    ...(initialState === undefined ? {} : {
      preloadedState: initialState,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  });
}
