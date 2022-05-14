import { Action } from '@reduxjs/toolkit';

export type RouterActions = RouterUpdate | RouterPageChange;

// Will be dispatched when Next Router was updated
export interface RouterUpdate extends Action<'ROUTER_UPDATE_ACTION'> {
  payload: {
    url: string;
  };
}

// Will be dispatched when Next Router was updated and updated path is different from current one
export interface RouterPageChange extends Action<'ROUTER_PAGE_CHANGE_ACTION'> {
  payload: {
    url: string;
  };
}

export const routerUpdateAction = (url: string): RouterUpdate => ({
  type: 'ROUTER_UPDATE_ACTION',
  payload: {
    url,
  },
});

export const routerPageChangeAction = (url: string): RouterPageChange => ({
  type: 'ROUTER_PAGE_CHANGE_ACTION',
  payload: {
    url,
  },
});
