import {
  NOVEL_FECTH_CHAPTERS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  id: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case NOVEL_FECTH_CHAPTERS_SUCCESS:
      return { ...state, chatpers: action.payload};
    default:
      return state;
  }
};
