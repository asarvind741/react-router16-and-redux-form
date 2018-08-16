import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { fetchPostsReducer } from './reducer_posts';

const rootReducer = combineReducers({
  posts: fetchPostsReducer,
  form: formReducer
});

export default rootReducer;
