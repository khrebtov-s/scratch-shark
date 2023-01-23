import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
// eslint-disable-next-line import/no-cycle
import AuthRoute from './AuthRoute';

import ComponentLoader from '../pages/components/ComponentLoader';
import Loader from '../pages/components/Loader/Loader';

const AsyncAuth = Loadable({
  loader: () => import('../pages/Auth/Auth'),
  loading: ComponentLoader,
});

const AsyncSignup = Loadable({
  loader: () => import('../pages/Auth/Signup/Signup'),
  loading: Loader,
});

const AsyncLogIn = Loadable({
  loader: () => import('../pages/Auth/LogIn/LogIn'),
  loading: Loader,
});

const AsyncForgotPassword = Loadable({
  loader: () => import('../pages/Auth/ForgotPassword'),
  loading: Loader,
});

const AsyncMainPages = Loadable({
  loader: () => import('./MainPages'),
  loading: Loader,
});

const AsyncBestTickets = Loadable({
  loader: () => import('../pages/Lotteries/BestTickets/BestTickets'),
  loading: ComponentLoader,
});

const AsyncPrivacy = Loadable({
  loader: () => import('../pages/More/Privacy'),
  loading: ComponentLoader,
});

const AuthPages = () => {
  return (
    <Switch>
      <AuthRoute path="/auth" exact component={AsyncAuth} />
      <AuthRoute path="/login" exact component={AsyncLogIn} />
      <AuthRoute path="/signup" exact component={AsyncSignup} />
      <AuthRoute path="/forgotpass" exact component={AsyncForgotPassword} />
      <AuthRoute path="/auth/privacy-policy" component={AsyncPrivacy} />
      <AsyncMainPages />
    </Switch>
  );
};

export default AuthPages;

export const preloadAuthPages = () => {
  AsyncAuth.preload();
  AsyncLogIn.preload();
  AsyncSignup.preload();
  AsyncForgotPassword.preload();
  AsyncMainPages.preload();
  AsyncBestTickets.preload();
};
