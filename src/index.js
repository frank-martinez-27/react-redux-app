import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import configureStore from './components/store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

import { Provider } from 'react-redux';

import {loadCourses} from './components/actions/courseActions';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/sb-admin.css';
import './styles/plugins/morris.css';
import './styles/font-awesome/css/font-awesome.min.css';
import './styles/styles.css';

const store = configureStore();

store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('app')
);
