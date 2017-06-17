import {
  TOGGLE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SUCCESS:
      return { isLoading: action.payload };
    default:
      return state;
  }
};
