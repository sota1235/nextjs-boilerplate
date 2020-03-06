import React from 'react';
import App, { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ActionTypes } from '../actions/actionTypes';
import { withReduxStore } from '../hoc/withReduxStore';
import { AppState } from '../reducers';
import { AppStylesProvider } from '../styles/AppStylesProvider';

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
        <AppStylesProvider>
          <Component {...pageProps} />
        </AppStylesProvider>
      </Provider>
    );
  }
}

export default withReduxStore<Props, AppState, ActionTypes>(MyApp);
