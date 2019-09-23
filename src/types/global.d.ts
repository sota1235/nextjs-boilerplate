import {Store} from "redux";

declare global {
  interface Window<S extends Store> {
    __NEXT_REDUX_STORE__: S; // TODO
  }
}
