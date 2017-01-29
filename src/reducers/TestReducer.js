import { TEST_CHANGED } from '../actions/types.js';

const INITIAL_STATE = { text: ''};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case TEST_CHANGED:
    return { ...state, text: action.payload};
  default:
    return state;
  }
};
