import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import userReducer from './user/user.reducer';
import bagMenuReducer from './dropdown-cart-bag/bag.reducer';
import directoryReducer from './directory/directory.reducer';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import shopReducer from './shop/shop.reducer';
import productsReducer from './products/products.reducer';
import productsDetailsReducer from './products/productsDetails/productsDetails.reducer';
import navigationReducer from './navbar/navbar.reducer'

const rootReducer = combineReducers({
    user: userReducer,
    bag: bagMenuReducer,
    directory: directoryReducer,
    shop: shopReducer,
    products: productsReducer,
    productsDetails: productsDetailsReducer,
    nav: navigationReducer
});


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['bag']
}

export default persistReducer(persistConfig, rootReducer)