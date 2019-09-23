import {Store} from "redux";

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: Store;
  }
}
