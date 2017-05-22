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
      <App>
        <Route exact={true} path="/" component={Home} />
        <Route path="/graphs" component={Graphs} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
