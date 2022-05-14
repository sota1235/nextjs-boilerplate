import {
  Action,
  AnyAction,
  applyMiddleware,
  createStore,
  PreloadedState,
  Reducer,
  Store,
} from '@reduxjs/toolkit';
import middleware from '../middlewares';

export function getStore<S = any, A extends Action = AnyAction>(
  reducer: Reducer,
  initialState?: PreloadedState<S>,
): Store<S, A> {
  return createStore<S, A, unknown, unknown>(
    reducer,
    initialState,
    applyMiddleware(...middleware),
  );
}
