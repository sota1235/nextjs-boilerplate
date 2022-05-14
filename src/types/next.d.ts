import { AppState } from '../reducers';
import { Store } from '@reduxjs/toolkit';

declare module 'next' {
  interface NextPageContext {
    store: Store<AppState>;
  }
}
