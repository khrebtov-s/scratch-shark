import React from 'react';
import { Route, Redirect, } from 'react-router-dom';
import { connect, } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser, getVisited, } from '../redux/reducers/authReducer';
import { toJS, } from '../utils/toJS';

const PrivateRoute = ({ component: Component, user, visited, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        <Component />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  visited: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  visited: getVisited(state),
  user: getUser(state),
});

export default connect(mapStateToProps)(toJS(PrivateRoute));
