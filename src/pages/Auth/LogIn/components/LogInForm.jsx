import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLoginState } from '../../../../redux/reducers/authReducer';
import { toJS } from '../../../../utils/toJS';

const LogInForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const { onSubmit, loginState } = props;
  const { errors, loading } = loginState;

  const passwordHandler = ({ target: { value } }) => {
    setPassword(value);
  };

  const loginHandler = ({ target: { value } }) => {
    setLogin(value);
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };
  return (
    <React.Fragment>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ login, password });
        }}
      >
        {errors && <div className="error-msg">{errors}</div>}
        <input
          type="text"
          spellCheck={false}
          title=""
          placeholder="User Name / Email Address"
          value={login}
          className={errors ? 'error-cls' : ''}
          onChange={(e) => {
            loginHandler(e);
          }}
        />

        <div className="label-group">
          <input
            spellCheck={false}
            type={showPassword ? 'text' : 'password'}
            title=""
            placeholder="Password"
            id="login-password"
            value={password}
            className={errors ? 'error-cls' : ''}
            onChange={(e) => {
              passwordHandler(e);
            }}
          />
          <label
            onClick={() => {
              showPasswordHandler();
            }}
            style={{ cursor: 'pointer' }}
            htmlFor="login-password"
            className={showPassword ? '' : 'blocked'}
          >
            <span className="icon-eye" />
          </label>
        </div>

        <Link to="forgotpass" href="#" className="a-black">
          Forgot password
        </Link>
        <button
          disabled={loading}
          type="submit"
          href="#"
          style={{ cursor: 'pointer' }}
          className={'btn-stl ' + (loading ? 'disabled' : 'btn-yellow')}
        >
          Log in
        </button>
      </form>
    </React.Fragment>
  );
};

LogInForm.propTypes = {
  loginState: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loginState: getLoginState(state),
});

export default connect(mapStateToProps)(toJS(LogInForm));