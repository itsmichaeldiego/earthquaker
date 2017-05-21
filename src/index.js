import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import store from './store';

import App from './App';
import Home from './Home';
import Graphs from './Graphs';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App}>
        <Route path="/home" component={Home} />
        <Route path="/graphs" component={Graphs} />
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
