import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';
// import { Router, browserHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/sb-admin.css';
import './styles/plugins/morris.css';
import './styles/font-awesome/css/font-awesome.min.css';

render(
  <Router>
    <App />
  </Router>, document.getElementById('app')
);
