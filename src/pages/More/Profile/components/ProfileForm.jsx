import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toJS } from '../../../../utils/toJS';
import {
  logoutAction,
  profileEdit,
  refreshProfileEdit,
} from '../../../../redux/actions/authActions';

import profilepic from '../../../../img/145848.png';
import { getAuthState } from '../../../../redux/reducers/authReducer';

const FILE_SIZE = 1000000;
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

const ProfileForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { auth, logoutAction, profileEdit, refreshProfileEdit } = props;
  const { user, profile } = auth;
  const { errors, loading } = profile;

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values) => {
    refreshProfileEdit();
    profileEdit(values);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logoutAction();
  };

  if (!user.token) {
    return <Redirect to={{ pathname: '/login', fromProfile: true }} />;
  }
  return (
    <Formik
      initialValues={{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: '',
        username: user.username,
        newPassword: '',
      }}
      validationSchema={profileSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values, { setStatus }) => {
        setStatus('');
        handleSubmit(values);
      }}
    >
      {({ values, setFieldValue, status, setStatus }) => (
        <Form>
          <div className="profile-photo">
            <img src={user.imagePath || profilepic} alt="" />
            <label htmlFor="file" className="input-label">
              <div></div>
              <Field
                style={{
                  position: 'absolute',
                  top: '-110vh',
                }}
                name="profilePic"
                value={values.profilePic}
                type="file"
                id="file"
                onChange={(e) => {
                  refreshProfileEdit();
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onload = function (item) {
                    setFieldValue('profilePic_data', item.target.result);
                  };
                  reader.readAsDataURL(file);
                  const validType = SUPPORTED_FORMATS.indexOf(file.type) > -1;
                  if (!validType) {
                    setStatus('Unsupported format');
                    return;
                  }
                  const validSize = file.size < FILE_SIZE;
                  if (!validSize) {
                    setStatus(
                      `Image is too large (Max ${FILE_SIZE / 1000000}MB)`,
                    );
                    return;
                  }
                  setStatus('');
                  const formData = new FormData();
                  formData.set('imageFile', file);
                  profileEdit(formData, 'avatar');
                }}
              />
            </label>
          </div>
          <ErrorMessage name="file" component="div" />
          {errors && <div>{errors}</div>}
          {status && <div>{status}</div>}
          <Field
            name="firstName"
            value={values.firstName}
            title=""
            placeholder="First Name"
            className="mb-1r"
          />
          <ErrorMessage name="firstName" component="div" />
          <Field
            name="lastName"
            value={values.lastName}
            title=""
            placeholder="Last Name"
            className="mb-1r"
          />
          <ErrorMessage name="lastName" component="div" />

          <Field
            name="email"
            value={values.email}
            type="email"
            title=""
            placeholder="Email Address"
            className="mb-1r"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            title=""
            placeholder="Username"
            className="mb-1r"
            name="username"
            value={values.username}
          />
          <ErrorMessage name="username" component="div" />
          <div className="label-group mb-1r">
            <Field
              name="password"
              value={values.password}
              type={showPassword ? 'text' : 'password'}
              spellCheck={false}
              title=""
              placeholder="Current Password"
              id="signin-password"
            />
            <label
              onClick={() => {
                showPasswordHandler();
              }}
              htmlFor="signin-password"
              className={showPassword ? '' : 'blocked'}
            >
              <span className="icon-eye" />
            </label>
          </div>
          <ErrorMessage name="password" component="div" />
          <div className="label-group m-0">
            <Field
              name="newPassword"
              value={values.newPassword}
              type={showPassword ? 'text' : 'password'}
              spellCheck={false}
              title=""
              placeholder="New Password"
              id="signin-new-password"
            />
            <label
              onClick={() => {
                showPasswordHandler();
              }}
              htmlFor="signin-new-password"
              className={showPassword ? '' : 'blocked'}
            >
              <span className="icon-eye" />
            </label>
          </div>
          <ErrorMessage name="newPassword" component="div" />

          <div className="btn-block">
            <button
              disabled={loading}
              type="submit"
              className={'btn-stl btn-yellow' + (loading ? ' blocked' : '')}
            >
              Save changes
            </button>
            <a
              type="button"
              href="#"
              onClick={(e) => {
                handleLogout(e);
              }}
              className="btn-stl"
            >
              Sign out
            </a>
          </div>
        </Form>
      )}
    </Formik>
  );
};

ProfileForm.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.shape({
      username: PropTypes.string,
      email: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }),
    token: PropTypes.string,

    visited: PropTypes.bool,
    registered: PropTypes.bool,
    errors: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    expirationDate: PropTypes.string,
  }).isRequired,
  logoutAction: PropTypes.func.isRequired,
  profileEdit: PropTypes.func.isRequired,
  refreshProfileEdit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: getAuthState(state),
});

export default connect(
  mapStateToProps,
  { logoutAction, profileEdit, refreshProfileEdit },
)(toJS(ProfileForm));

const profileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First Name is too short.')
    .max(20, 'First Name is too long.')
    .required('First Name is required'),

  lastName: Yup.string()
    .min(2, 'Last Name is too short.')
    .max(20, 'Last Name is too long.')
    .required('Last Name is required'),

  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),

  username: Yup.string()
    .min(2, 'First Name is too short.')
    .max(20, 'First Name is too long.')
    .required('First Name is required'),

  password: Yup.string().required('Password is required'),

  newPassword: Yup.string()
    .min(4, 'New password is too short.'),
});
