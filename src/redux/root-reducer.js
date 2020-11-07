import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './user/user.reducer';
import bagMenuReducer from './dropdown-cart-bag/bag.reducer';
import directoryReducer from './directory/directory.reducer';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import shopReducer from './shop/shop.reducer';




const rootReducer = combineReducers({
    user: userReducer,
    bag: bagMenuReducer,
    directory: directoryReducer,
    shop: shopReducer
});


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['bag']
}

export default persistReducer(persistConfig, rootReducer)