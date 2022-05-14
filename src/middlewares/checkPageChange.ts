import { Dispatch, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { AppState } from '../reducers';
import { ActionTypes } from '../actions/actionTypes';
import { routerPageChangeAction, RouterUpdate } from '../actions/routerUpdate';

const checkPageChange: Middleware<unknown, AppState, Dispatch<ActionTypes>> =
  <S extends AppState>({ getState, dispatch }: MiddlewareAPI<Dispatch, S>) =>
  (next: Dispatch<ActionTypes>) =>
  (action: ActionTypes): any => {
    if (action.type !== 'ROUTER_UPDATE_ACTION') {
      return next(action);
    }

    const { router } = getState();
    const currentUrl = router.url;
    const newUrl = (action as RouterUpdate).payload.url;

    if (currentUrl === newUrl) {
      return next(action);
    }

    dispatch(routerPageChangeAction(newUrl));
    return next(action);
  };

export { checkPageChange };
