import { checkPageChange } from './checkPageChange';
import { RouterPageChange } from '../actions/routerUpdate';
import { AppState } from '../reducers';

const emptyState: AppState = {
  concerts: {
    concerts: [],
  },
  router: {
    url: '',
  },
}

describe('test for checkPageChange', () => {
  it('should skip expect RouterUpdateAction', () => {
    const dispatch = jest.fn();
    const next = jest.fn((action) => action);
    const action = {
      type: 'SOME_ACTION',
    };

    const dispatcher = checkPageChange({
      getState: () => (emptyState),
      dispatch,
    })(next);

    expect(dispatcher(action)).toEqual(action);
    expect(dispatch).toHaveBeenCalledTimes(0);
    expect(next).toHaveBeenCalled();
    expect(next.mock.calls[0]).toEqual([action]);
  });

  it('should skip if page does not change', () => {
    const dispatch = jest.fn();
    const next = jest.fn((action) => action);
    const currentURL = '/currentURL';
    const currentState = {
      ...emptyState,
      router: {
        url: currentURL,
      },
    };
    const action = {
      type: 'ROUTER_UPDATE_ACTION',
      payload: {
        url: currentURL,
      },
    };

    const dispatcher = checkPageChange({
      getState: () => currentState,
      dispatch,
    })(next);

    expect(dispatcher(action)).toEqual(action);
    expect(dispatch).toHaveBeenCalledTimes(0);
    expect(next).toHaveBeenCalled();
    expect(next.mock.calls[0]).toEqual([action]);
  });

  it('should dispatch path change action if page changes', () => {
    const dispatch = jest.fn();
    const next = jest.fn((action) => action);
    const newURL = '/newURL';
    const currentState = {
      ...emptyState,
      router: {
        url: 'currentURL',
      },
    };
    const action = {
      type: 'ROUTER_UPDATE_ACTION',
      payload: {
        url: newURL,
      },
    };

    const dispatcher = checkPageChange({
      getState: () => currentState,
      dispatch,
    })(next);

    expect(dispatcher(action)).toEqual(action);
    expect(dispatch).toHaveBeenCalled();
    expect(dispatch.mock.calls[0]).toEqual([
      {
        type: 'ROUTER_PAGE_CHANGE_ACTION',
        payload: {
          url: newURL,
        },
      } as RouterPageChange,
    ]);
    expect(next).toHaveBeenCalled();
    expect(next.mock.calls[0]).toEqual([action]);
  });
});
