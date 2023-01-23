import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toJS } from '../utils/toJS';
import { getUser } from '../redux/reducers/authReducer';
// eslint-disable-next-line import/no-cycle
import { preloadAuthPages } from './AuthPages';

// This route private for unauthorized users
const AuthRouteComponent = (props) => {
  const { user, component, routeProps, exact } = props;
  const Component = component;

  useEffect(() => {
    preloadAuthPages();
  }, []);
  return (
    <Route
      {...routeProps}
      exact={exact}
      component={() => {
        return !user.token ? <Component /> : <Redirect to="/best" />;
      }}
    />
  );
};

AuthRouteComponent.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  routeProps: PropTypes.object,
  exact: PropTypes.bool.isRequired,
};

AuthRouteComponent.defaultProps = {
  routeProps: {},
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

const AuthRoute = connect(mapStateToProps)(toJS(AuthRouteComponent));
export default AuthRoute;
