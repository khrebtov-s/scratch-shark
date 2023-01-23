import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginAction, refreshLogin } from '../../../redux/actions/authActions';
import { toJS } from '../../../utils/toJS';
import LogInForm from './components/LogInForm';
import { getVisited } from '../../../redux/reducers/authReducer';

const LogIn = (props) => {
  const { loginAction, refreshLogin, visited } = props;

  useEffect(() => {
    return () => {
      refreshLogin();
    };
  });

  const submitHandler = ({ login, password }) => {
    loginAction({ login, password });
  };

  return (
    <div
      style={{ position: 'absolute', width: '100%', height: '100%', margin: '0', overflowY: 'auto' }}
      className="padding-4p"
    >
      <div className="header">
        <div className="white">
          <h2>Log In</h2>
          <Link to="/more" >
            <span className="icon-left-arrow" />
            <br />
            <p >Back</p>
          </Link>
        </div>
      </div >
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div className="more-form">
          <LogInForm onSubmit={submitHandler} />
        </div>
        <div className="need-an-account">
          <p>Need an account?</p>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  refreshLogin: PropTypes.func.isRequired,
  loginAction: PropTypes.func.isRequired,
  visited: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  visited: getVisited(state),
});

export default connect(
  mapStateToProps,
  { loginAction, refreshLogin },
)(toJS(withRouter(LogIn)));
