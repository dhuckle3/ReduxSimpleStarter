import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});

//const reducer = combineReducers(reducers);
//const store = createStore(reducer);

export default rootReducer;
