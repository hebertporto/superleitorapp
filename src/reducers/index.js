import { combineReducers } from 'redux';
import NovelReducer from './NovelReducer';

export default combineReducers({
      default: () => [],
      novels: NovelReducer
});
