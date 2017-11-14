import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import configureStore from './components/store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

import { Provider } from 'react-redux';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/sb-admin.css';
import './styles/plugins/morris.css';
import './styles/font-awesome/css/font-awesome.min.css';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('app')
);
