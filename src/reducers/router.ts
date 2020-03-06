import { ActionTypes } from '../actions/actionTypes';
import { RouterUpdate } from '../actions/routerUpdate';

interface Router {
  url: string;
}

const initialState: Router = {
  url: '',
};

export const router = (
  state: Router = initialState,
  action: ActionTypes,
): Router => {
  switch (action.type) {
    case 'ROUTER_UPDATE_ACTION': {
      return {
        url: (action as RouterUpdate).payload.url,
      };
    }
    default:
      return state;
  }
};
