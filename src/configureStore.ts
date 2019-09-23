import {
  Action,
  AnyAction,
  applyMiddleware,
  createStore,
  Reducer,
  Store,
} from 'redux';
import middleware from './middlewares';

export function getStore<S = any, A extends Action = AnyAction>(
  reducer: Reducer,
  initialState?: {},
): Store<S, A> {
  return createStore<S, A, {}, {}>(
    reducer,
    initialState,
    applyMiddleware(...middleware),
  );
}
