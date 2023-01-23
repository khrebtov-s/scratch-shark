import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { toJS } from '../../../utils/toJS';
import { refreshProfileEdit } from '../../../redux/actions/authActions';

import ProfileForm from './components/ProfileForm';

const Profile = (props) => {
  const { refreshProfileEdit } = props;
  useEffect(() => {
    return () => {
      refreshProfileEdit();
    };
  });
  return (
    <div
      className="padding-profile"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
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
            <h2>Profile</h2>
            <Link to="/more">
              <span className="icon-left-arrow" />
              <br />
              <p >Back</p>
            </Link>
          </div>
        </div >
        <div className="profile">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  refreshProfileEdit: PropTypes.func.isRequired,
};

export default connect(
  null,
  { refreshProfileEdit },
)(toJS(Profile));
