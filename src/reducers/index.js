import { combineReducers } from 'redux';
import NovelReducer from './NovelReducer';
import NovelChaptersReducer from './NovelChaptersReducer';

export default combineReducers({
      novels: NovelReducer,
      novelsChapters: NovelChaptersReducer
});
