import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  registerAction,
  refreshRegister,
} from '../../../redux/actions/authActions';
import { toJS } from '../../../utils/toJS';
import SignupForm from './components/SignupForm';
import '../auth.scss';

const Signup = (props) => {
  const { refreshRegister } = props;

  useEffect(() => {
    return () => {
      refreshRegister();
    };
  });

  return (
    <div
      className="padding-4p"
      style={{
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
        margin: '0',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <div className="header">
          <div className="white">
            <h2>Sign Up</h2>
            <Link to="/more" >
              <span className="icon-left-arrow" />
              <br />
              <p >Back</p>
            </Link>
          </div>
        </div >
        <div className="more-form">
          <SignupForm />
        </div>
        <div className="privacy-link__register">
          <Link
            to="/more/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  refreshRegister: PropTypes.func.isRequired,
};

export default connect(
  null,
  { registerAction, refreshRegister },
)(toJS(Signup));
