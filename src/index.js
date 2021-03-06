import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Routes from './Routes';
import './index.css';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
    <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);