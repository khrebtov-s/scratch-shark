import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import { toJS } from './utils/toJS';

import { logoutAction } from './redux/actions/authActions';
import { getVisited, getUser } from './redux/reducers/authReducer';
import { checkTokenAPI } from './api/authAPI';

import Loader from './pages/components/Loader/Loader';
import ReactGA from 'react-ga';

const App = (props) => {
  const { user, logoutAction } = props;

  useEffect(() => {
    if (user.token) {
      checkTokenAPI(user.token)
        .then(() => { })
        .catch((e) => {
          const errObj = JSON.parse(JSON.stringify(e));
          if (errObj.response.status === 401) {
            logoutAction();
          }
        });
    }

    ReactGA.initialize('UA-179009867-2');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Helmet>
        <title>ScratchShark</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Helmet>
      <Route>
        <AsyncAuthPages />
      </Route>
    </Router>
  );
};

App.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  logoutAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  visited: getVisited(state),
  user: getUser(state),
});

export default connect(
  mapStateToProps,
  { logoutAction },
)(toJS(App));

const AsyncAuthPages = Loadable({
  loader: () => import('./routes/AuthPages'),
  loading: Loader,
});
