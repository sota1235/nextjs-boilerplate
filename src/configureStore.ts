import { Action, AnyAction, createStore, Reducer, Store } from 'redux';

export function getStore<S = any, A extends Action = AnyAction>(
  reducer: Reducer,
  initialState?: {},
): Store<S, A> {
  return createStore(reducer, initialState);
}
