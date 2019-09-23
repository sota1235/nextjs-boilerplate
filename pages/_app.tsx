import App, { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ActionTypes } from '../src/actions/actionTypes';
import { withReduxStore } from '../src/hoc/withReduxStore';
import { AppState } from '../src/reducers';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';

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
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore<Props, AppState, ActionTypes>(MyApp);
