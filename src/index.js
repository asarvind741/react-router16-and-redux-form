import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'


import PostIndex from './components/post-index';
import PostNew from './components/post-new';
import PostShow from './components/post-show'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
  <div>
    <Switch>
    <Route path = "/posts/new" component = { PostNew } />
    <Route path = "/posts/:id" component = { PostShow } />
    <Route path = "/" component = { PostIndex} />
    </Switch>
  </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
