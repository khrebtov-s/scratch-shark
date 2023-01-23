import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { visitPage } from '../../redux/actions/authActions';
import { toJS } from '../../utils/toJS';
import {
  getUser,
  getLoggedIn,
  getVisited,
} from '../../redux/reducers/authReducer';
import './auth.scss';

const Auth = (props) => {
  const { visitPage, user, visited } = props;
  // If guest or logged in -> redirect
  if (visited || user.token) {
    visitPage();
    return <Redirect to="/best" />;
  }
  return (
    <div
      className="bg-blue-gradient"
      style={{ width: '100%', height: '100%', margin: '0' }}
    >
      <div className="bg-spl1ash">
        <div
          className="full-screen bg-logo-beta"
          style={{
            minHeight: '100%',
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        >
          <div
            className="btn-block"
            style={{
              maxWidth: '500px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            <p className="available-location">Now available in Rhode Island</p>
            <Link to="/login" className="btn-stl btn-yellow">
              Log in
            </Link>
            <Link to="/signup" className="btn-stl">
              Sign up
            </Link>
            
            <Link
              className="btn-stl"
              onClick={() => {
                visitPage();
              }}
              to="/best"
            >
              Continue as guest
            </Link>
            <div className="privacy-link">
              <Link
              to="/auth/privacy-policy"
              >
                Privacy Policy
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

Auth.propTypes = {
  visitPage: PropTypes.func.isRequired,
  visited: PropTypes.bool.isRequired,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
};

const mapStateToProps = (state) => ({
  visited: getVisited(state),
  loggedIn: getLoggedIn(state),
  user: getUser(state),
});

export default connect(
  mapStateToProps,
  { visitPage },
)(toJS(Auth));
