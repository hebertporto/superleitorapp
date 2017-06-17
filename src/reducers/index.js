import { combineReducers } from 'redux';
import NovelReducer from './NovelReducer';
import NovelChaptersReducer from './NovelChaptersReducer';
import ChapterReducer from './ChapterReducer';
import ToggleReducer from './ToggleReducer';

export default combineReducers({
      novels: NovelReducer,
      novelsChapters: NovelChaptersReducer,
      chapter: ChapterReducer,
      toggle: ToggleReducer
});
