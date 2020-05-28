import { AppState } from '../reducers';

declare module 'next' {
  interface NextPageContext {
    store: Store<AppState>;
  }
}
