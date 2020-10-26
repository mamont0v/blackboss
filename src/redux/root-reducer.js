import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import bagMenuReducer from './dropdown-cart-bag/bag.reducer'

export default combineReducers({
    user: userReducer,
    bag: bagMenuReducer
});