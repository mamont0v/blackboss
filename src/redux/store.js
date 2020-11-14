import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSagas from './root-sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];




if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //вместо middlewares можно написать просто logger

sagaMiddleware.run(rootSagas)


const persistor = persistStore(store)

export { store, persistor }