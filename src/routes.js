import * as React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export const routes = [
  { path: '/home', component: HomePage },
  { path: '/about', component: AboutPage }
  /* {
    path: '/about/:id', component: AboutPage,
    routes: [
      {
        path: '/about/:id/home',
        component: HomePage
      }
    ]
  } */
];

export const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={function (props) {
    return <route.component{...props} routes={route.routes} />;
  }
  } />
);
