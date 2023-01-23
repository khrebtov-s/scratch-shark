import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { passwordResetAPI } from '../../api/authAPI';

const passResetSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
});
const FormikMemo = React.memo(Formik);

const ForgotPassword = () => {
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const onSubmit = async (val) => {
    setIsPending(true);
    try {
      const response = await passwordResetAPI(val);
      if (response.status === 204) {
        setError('Password was sent to your email');
      }
      setIsPending(false);
    } catch (e) {
      setError(getErrorMessage(e));
      setIsPending(false);
    }
  };

  return (
    <div
      style={{ width: '100%', height: '100%', margin: '0' }}
      className="padding-4p"
    >
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        <div className="header">
          <div className="white">
            <h2>Reset Password</h2>
            <Link to="/login">
              <span className="icon-left-arrow" />
              <br />
              <p >Back</p>
            </Link>
          </div>
        </div>
        <p
          style={{ marginTop: '4rem' }}
        >
          To have your password reset, input your email address. A temporary
          password will be emailed to you.
        </p>
        <FormikMemo
          initialValues={{ email: '' }}
          validationSchema={passResetSchema}
          onSubmit={(values) => {
            onSubmit(values);
          }}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ values, errors }) => (
            <Form>
              {/*<ErrorMessage name="email" component="div" className="error-msg" />*/}
              {/*{error && <div>{error}</div>}*/}
              <Field
                value={values.email}
                type="email"
                name="email"
                title=""
                placeholder="Email Address"
                spellCheck={false}
                className={errors.email ? 'error-cls' : ''}
              />

              <div className="pos-bottom-4p">
                <button
                  type="submit"
                  disabled={isPending}
                  className={
                    'btn-stl ' + (isPending ? 'disabled' : 'btn-yellow')
                  }
                  style={{ fontSize: '3git rem', cursor: 'pointer' }}
                >
                  Reset Password
                </button>
              </div>
            </Form>
          )}
        </FormikMemo>
      </div>
    </div>
  );
};

const getErrorMessage = (e) => {
  if (!e.response) {
    return 'Something went wrong';
  } else {
    if (!e.response.data.errors) {
      return e.statusText;
    }
    return e.response.data.errors[0].description;
  }
};

export default ForgotPassword;