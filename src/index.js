import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 1. Import from react-redux and redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// 2. Create user reducer function
const authReducer = (state = {}, action) => {
  // { type: 'LOGGED_IN_USER', payload: { name: 'Harry', role: 'Seller } }
  switch(action.type) {
    case 'LOGGED_IN_USER':
      return {...state, ...action.payload};
    case 'LOGOUT':
      return action.payload;
    default:
      return state;
  }
};

// 3. combine multiple reducers
const rootReducer = combineReducers({
  user: authReducer
});

// 4. create redux syore
const store = createStore(rootReducer, composeWithDevTools());

// 5. provide redux store to the entire app


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
