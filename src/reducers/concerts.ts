import { ActionTypes } from '../actions/actionTypes';

interface Concerts {
  concerts: Concert[];
}

const initialState: Concerts = {
  concerts: [],
};

const concerts = (
  state: Concerts = initialState,
  action: ActionTypes,
): Concerts => {
  switch (action.type) {
    default:
      return state;
  }
};

export default concerts;
