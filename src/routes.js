import * as React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';

import ItunesContainer from './components/itunes-component/itunesContainer';
import CountdownContainer from './components/countdown-component/countdownContainer';
import BindingContainer from './components/binding-component/bindingContainer';
import StockContainer from './components/stock-component/stockContainer';

export const routes = [
  { path: '/home', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/courses', component: CoursesPage },
  { path: '/itunes', component: ItunesContainer },
  { path: '/countdown', component: CountdownContainer },
  { path: '/binding', component: BindingContainer },
  { path: '/stock', component: StockContainer }
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
