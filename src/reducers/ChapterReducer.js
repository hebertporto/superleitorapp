import {
  CHAPTER_FECTH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  id: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHAPTER_FECTH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
