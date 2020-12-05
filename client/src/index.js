import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ApolloProviderComponent from './apollo/ApolloProvider';


ReactDOM.render(
  <ApolloProviderComponent>
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  </ApolloProviderComponent>,
  document.getElementById('root')
);

