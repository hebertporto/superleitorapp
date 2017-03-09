import { combineReducers } from 'redux';
import NovelReducer from './NovelReducer';
import NovelChaptersReducer from './NovelChaptersReducer';

export default combineReducers({
      default: () => [],
      novels: NovelReducer,
      novelsChapters: NovelChaptersReducer 
});
