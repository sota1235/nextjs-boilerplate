import App, { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { withReduxStore } from '../src/hoc/withReduxStore';
import { AppState } from '../src/reducers';
import {ActionTypes} from "../src/actions/actionTypes";

type AppStore = Store<AppState, ActionTypes>;
interface Props extends AppProps {
  store: AppStore;
}

class MyApp extends App<any> {
  // TODO better typing
  public render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore<Props, AppState, ActionTypes>(MyApp);
