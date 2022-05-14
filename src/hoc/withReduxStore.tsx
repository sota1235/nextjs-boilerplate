import NextApp, { AppContext, AppProps } from 'next/app';
import { Component } from 'react';
import { PreloadedState, Store } from '@reduxjs/toolkit';
import { AppState, createRootReducer } from '../reducers';
import { getStore } from '../store/configureStore';
import { ActionTypes } from '../actions/actionTypes';

const isServer = typeof window === 'undefined';
export const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

const rootReducer = createRootReducer();

function getOrCreateStore(
  initialState?: PreloadedState<AppState>,
): Store<AppState, ActionTypes> {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return getStore(rootReducer, initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!Object.prototype.hasOwnProperty.call(window, __NEXT_REDUX_STORE__)) {
    window[__NEXT_REDUX_STORE__] = getStore(
      rootReducer,
      initialState,
    );
  }
  return window[__NEXT_REDUX_STORE__];
}

export function withReduxStore<NextAppProps>(App: typeof NextApp) {
  type Props = NextAppProps &
    AppProps & { initialReduxState: PreloadedState<AppState> };
  return class AppWithRedux extends Component<Props> {
    public static async getInitialProps(appContext: AppContext) {
      const store = getOrCreateStore();

      appContext.ctx.store = store;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: store.getState(),
      };
    }
    protected store: Store<AppState>;

    constructor(props: Props) {
      super(props);
      this.store = getOrCreateStore(props.initialReduxState);
    }

    public render() {
      return <App {...this.props} store={this.store} />;
    }
  };
}
