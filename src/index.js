import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js'
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root')
);