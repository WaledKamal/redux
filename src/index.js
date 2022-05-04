import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers/getCounterReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
 
const sotre = createStore(reducer)


root.render(
  <React.StrictMode>
    <Provider store={sotre} ><App /></Provider>
  </React.StrictMode>
);
