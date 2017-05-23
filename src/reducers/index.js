import {combineReducers} from 'redux';
import earthquakesReducer from './earthquakes';

export default combineReducers({
  earthquakes: earthquakesReducer
});
