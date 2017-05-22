import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import { fetchData } from './actions/fetchData'
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
);

store.dispatch(fetchData());

export default store;
