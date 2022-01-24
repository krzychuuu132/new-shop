import { combineReducers } from 'redux';

import productsReducer from './reducer';
import testReducer from './reducer';

export default combineReducers(productsReducer, testReducer);
