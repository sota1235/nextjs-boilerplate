import { NextComponentType, NextPageContext } from 'next';
import { AppContext } from "next/app";
import React from 'react'
import {Action, AnyAction, Store} from "redux";
import { getStore } from '../configureStore'
import { createRootReducer } from "../reducers";
import Any = jasmine.Any;

const isServer = typeof window === 'undefined';
export const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

const rootReducer = createRootReducer();

export interface NextJSContext<S = any, A extends Action = AnyAction> extends NextPageContext {
  store: Store<S, A>;
}

export interface NextJSAppContext<S = any, A extends Action = AnyAction> extends AppContext {
  ctx: NextJSContext<S, A>;
}

function getOrCreateStore (initialState?: {}): Store {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return getStore(rootReducer, initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window.hasOwnProperty(__NEXT_REDUX_STORE__)) {
    window[__NEXT_REDUX_STORE__] = getStore(rootReducer, initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export function withReduxStore<NextAppProps, S = any, A extends Action = AnyAction>(App: NextComponentType<NextJSAppContext<S, A>>) {
  type Props = NextAppProps & { initialReduxState: Store };
  return class AppWithRedux extends React.Component<Props> {

    public static async getInitialProps (appContext: NextJSAppContext) {
      const store = getOrCreateStore();

      appContext.ctx.store = store;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: store.getState()
      }
    }
    protected reduxStore: Store;

    constructor (props: Props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    public render () {
      return <App {...this.props} reduxStore={this.reduxStore} />
    }
  }
}