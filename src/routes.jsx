import React from 'react';
import {
  Switch, Route, Redirect, BrowserRouter,
} from 'react-router-dom';
import LoginPage from './sections/LoginPage';
import RegistrationPage from './sections/RegistrationPage';
import ROUTE from './constant/routes.const';
import MoviesPage from './sections/MoviesPage';
import MovieDetailPage from './sections/MovieDetailPage/MovieDetailPage';
import ForgotPasswordPage from './sections/ForgotPasswordPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ROUTE.loginPage} component={LoginPage} />
      <Route path={ROUTE.registrationPage} component={RegistrationPage} />
      <Route path={ROUTE.moviesPage} component={MoviesPage} />
      <Route path={ROUTE.movieDetailsPage} component={MovieDetailPage} />
      <Route path={ROUTE.forgotPasswordPage} component={ForgotPasswordPage} />
      <Redirect to={ROUTE.loginPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
