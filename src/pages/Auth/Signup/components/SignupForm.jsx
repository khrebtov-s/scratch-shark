import React, { useState } from 'react';
import { Formik, ErrorMessage, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import moment from 'moment';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe';
import { registerAction } from '../../../../redux/actions/authActions';
import { toJS } from '../../../../utils/toJS';
import { getRegisterState } from '../../../../redux/reducers/authReducer';
import './SignUpForm.scss';

const SignupForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showMask, setShowMask] = useState(false);

  const { register, registerAction } = props;
  const { loading, errors: fetchError, registered } = register;

  const handleSignup = (values) => {
    const { dateOfBirth, ...rest } = values;
    const dobObject = moment(dateOfBirth).toDate();
    registerAction({ dateofBirth: dobObject, ...rest });
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const showConfirmPasswordHandler = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        dateOfBirth: null,
      }}
      validationSchema={signupSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onChange={(values) => {
        console.log(values);
      }}
      onSubmit={(values) => {
        handleSignup(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
      }) => (
          <Form>
            {fetchError && (
              <div
                className={registered ? '' : 'error-msg'}
                style={{ fontSize: '1rem' }}
              >
                {fetchError}
              </div>
            )}
            <ErrorMessage name="firstName" component="div" className="error-msg" />
            <Field
              name="firstName"
              value={values.firstName}
              title=""
              placeholder="First Name"
              className={errors.firstName ? 'mb-1r error-cls' : 'mb-1r'}
            />
            <ErrorMessage name="lastName" component="div" className="error-msg" />
            <Field
              name="lastName"
              value={values.lasttName}
              title=""
              placeholder="Last Name"
              className={errors.lastName ? 'mb-1r error-cls' : 'mb-1r'}
            />

            <ErrorMessage name="dateOfBirth" component="div" className="error-msg" />
            <Field
              name="dateOfBirth"
              render={({ field }) => {
                const autoCorrectedDatePipe = createAutoCorrectedDatePipe(
                  'mm/dd/yyyy',
                  { minYear: 1900, maxYear: moment().year() },
                );
                return (
                  <MaskedInput
                    onClick={() => {
                      setShowMask(true);
                    }}
                    mask={[
                      /\d/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]}
                    {...field}

                    id="dateOfBirth"

                    type="tel"
                    placeholder={showMask ? "__/__/____" : "Date Of Birth"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    pipe={autoCorrectedDatePipe}
                    className={
                      errors.dateOfBirth && touched.dateOfBirth
                        ? 'mb-1r text-input error error-cls'
                        : 'mb-1r text-input'
                    }
                  />
                );
              }}
            />


            <ErrorMessage name="email" component="div" className="error-msg" />
            <Field
              name="email"
              value={values.email}
              type="email"
              title=""
              placeholder="Email Address"
              className={errors.email ? 'mb-1r error-cls' : 'mb-1r'}
            />

            <ErrorMessage name="username" component="div" className="error-msg" />
            <Field
              title=""
              placeholder="Username"
              className={errors.username ? 'mb-1r error-cls' : 'mb-1r'}
              name="username"
              value={values.username}
            />
            <ErrorMessage name="password" component="div" className="error-msg" />
            <div className="label-group mb-1r">
              <Field
                name="password"
                value={values.password}
                type={showPassword ? 'text' : 'password'}
                spellCheck={false}
                title=""
                placeholder="Password"
                id="signin-password"
                className={errors.password ? 'error-cls' : ''}
              />
              <label
                onClick={() => {
                  showPasswordHandler();
                }}
                style={{ cursor: 'pointer' }}
                htmlFor="signin-password"
                className={showPassword ? '' : 'blocked'}
              >
                <span className="icon-eye" />
              </label>
            </div>

            <ErrorMessage name="confirmPassword" component="div" className="error-msg" />
            <div className="label-group m-0">
              <Field
                name="confirmPassword"
                value={values.confirmPassword}
                type={showConfirmPassword ? 'text' : 'password'}
                spellCheck={false}
                title=""
                placeholder="Confirm Password"
                id="signin-confirm-password"
                className={errors.confirmPassword ? 'error-cls' : ''}
              />
              <label
                onClick={() => {
                  showConfirmPasswordHandler();
                }}
                style={{ cursor: 'pointer' }}
                htmlFor="signin-confirm-password"
                className={showConfirmPassword ? '' : 'blocked'}
              >
                <span className="icon-eye" />
              </label>
            </div>

            <div className="pos-bottom-4p">
              <button
                type="submit"
                disabled={loading || registered}
                style={{ cursor: 'pointer' }}
                className={
                  'btn-stl btn-yellow' + (loading || registered ? 'blocked' : '')
                }
              >
                SUBMIT
            </button>
            </div>
          </Form>
      )}
    </Formik>
  );
};

SignupForm.propTypes = {
  register: PropTypes.object.isRequired,
  registerAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  register: getRegisterState(state),
});

export default connect(
  mapStateToProps,
  { registerAction },
)(toJS(SignupForm));

const signupSchema = Yup.object().shape({
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
    .min(2, 'Username is too short.')
    .max(20, 'Username is too long.')
    .required('Username is required'),

  password: Yup.string().required('Password is required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords should match')
    .required('Password confirm is required'),

  dateOfBirth: Yup.date()
    .typeError('Date Of Birth is required')
    .min(
      moment()
        .subtract(100, 'year')
        .toDate(),
      'Invalid date',
    )
    .max(
      moment()
        .subtract(18, 'year')
        .toDate(),
      'You must be 18+ to use ScratchShark',
    )
    .required('Date Of Birth is required'),
});