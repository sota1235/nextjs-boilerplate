import { routerPageChangeAction, routerUpdateAction } from './routerUpdate';

describe('test for routerUpdate', () => {
  it('RouterUpdate', () => {
    expect(routerUpdateAction('newURL')).toEqual({
      type: 'ROUTER_UPDATE_ACTION',
      payload: {
        url: 'newURL',
      },
    });
  });

  it('RouterPageChange', () => {
    expect(routerPageChangeAction('newURL')).toEqual({
      type: 'ROUTER_PAGE_CHANGE_ACTION',
      payload: {
        url: 'newURL',
      },
    });
  });
});
