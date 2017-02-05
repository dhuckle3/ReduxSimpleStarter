import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Greeting from './components/greeting';

export default (
    <Route path="/" component={App}>
        <Route path="greet" component={Greeting} />
    </Route>
);
