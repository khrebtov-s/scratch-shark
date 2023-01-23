import { Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Loadable from 'react-loadable';
import ComponentLoader from '../pages/components/ComponentLoader';
import Loader from '../pages/components/Loader/Loader';
import PrivateRoute from './PrivateRoute';

const AsyncTicketRecommendations = Loadable({
  loader: () =>
    import('../pages/Lotteries/TicketRecommendations/TicketRecommendations'),
  loading: ComponentLoader,
});

const AsyncAuth = Loadable({
  loader: () => import('../pages/Auth/Auth'),
  loading: ComponentLoader,
});

const AsyncSelectState = Loadable({
  loader: () => import('../pages/Lotteries/BestTickets/components/SelectState'),
  loading: ComponentLoader,
});

const AsyncSingleTicket = Loadable({
  loader: () => import('../pages/Lotteries/SingleTicket'),
  loading: ComponentLoader,
});

const AsyncBestTickets = Loadable({
  loader: () => import('../pages/Lotteries/BestTickets/BestTickets'),
  loading: ComponentLoader,
});

const AsyncTicketExplorer = Loadable({
  loader: () => import('../pages/Lotteries/TicketExplorer/TicketExplorer'),
  loading: ComponentLoader,
});

const AsyncProfile = Loadable({
  loader: () => import('../pages/More/Profile/Profile'),
  loading: Loader,
});

const AsyncResponsible = Loadable({
  loader: () => import('../pages/More/Responsible/Responsible'),
  loading: ComponentLoader,
});

const AsyncTerms = Loadable({
  loader: () => import('../pages/More/Terms'),
  loading: ComponentLoader,
});

const AsyncPrivacy = Loadable({
  loader: () => import('../pages/More/Privacy'),
  loading: ComponentLoader,
});

const AsyncMorePage = Loadable({
  loader: () => import('../pages/More/MorePage'),
  loading: Loader,
});

const MainPages = () => {
  React.useEffect(() => {
    preloadMainPages();
  }, []);
  return (
    <Switch>
      <PrivateRoute path="/best" component={AsyncBestTickets} />
      <PrivateRoute path="/state" component={AsyncSelectState} />
      <PrivateRoute
        path="/recommended"
        component={AsyncTicketRecommendations}
      />
      <PrivateRoute path="/" exact component={AsyncAuth} />
      <PrivateRoute path="/ticket/:id" component={AsyncSingleTicket} />
      <PrivateRoute path="/ticket" component={AsyncSingleTicket} />
      <PrivateRoute path="/more" exact component={AsyncMorePage} />
      <PrivateRoute path="/more/terms" component={AsyncTerms} />
      <PrivateRoute path="/more/privacy-policy" component={AsyncPrivacy} />
      <PrivateRoute path="/profile" component={AsyncProfile} />
      <PrivateRoute path="/more/responsible" component={AsyncResponsible} />
      <Redirect path="*" to="/auth" />
    </Switch>
  );
};

export default MainPages;

export const preloadMainPages = () => {
  AsyncMorePage.preload();
  AsyncTicketRecommendations.preload();
  AsyncTerms.preload();
  AsyncBestTickets.preload();
  AsyncSelectState.preload();
  AsyncSingleTicket.preload();
  AsyncResponsible.preload();
  AsyncProfile.preload();
  AsyncTicketExplorer.preload();
};
