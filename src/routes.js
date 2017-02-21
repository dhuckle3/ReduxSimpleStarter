import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/posts_index';
import NewPost from './components/new_post';
import ShowPost from './components/show_post';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostIndex} />
        <Route path="posts" component={PostIndex} />
        <Route path="posts/new" component={NewPost} />
        <Route path="posts/:id" component={ShowPost} />
    </Route>
);
