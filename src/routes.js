import React from 'react';
import App from 'components/App'
import LandingPage from 'pages/LandingPage'
import AboutPage from 'pages/AboutPage'
import NotFoundPage from 'pages/NotFoundPage'

import { Route, IndexRoute } from 'react-router';

const routes = (
<Route path='/' component={App}>
  <IndexRoute component={LandingPage} />
  <Route path='/about' component={AboutPage} />
  <Route path='*' component={NotFoundPage} />
</Route>
)

export default routes;
