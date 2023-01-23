import React, { useEffect, } from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import profilepic from '../../img/145848.png';
import { toJS, } from '../../utils/toJS';
import { getUser, } from '../../redux/reducers/authReducer';
import { preloadAuthPages, } from '../../routes/AuthPages';
import './more.scss';

const MorePage = (props) => {
  const { user, } = props;
  const username = user.username || '';
  const firstName = user.firstName || 'Guest';
  const lastName = user.lastName || 'User';

  useEffect(() => {
    preloadAuthPages();
  }, []);

  function preventDefault(e) {
    e.preventDefault();
  }

  function disableScroll() {
    document.body.addEventListener('touchmove', preventDefault, {
      passive: false,
    });
  }
  function enableScroll() {
    document.body.removeEventListener('touchmove', preventDefault);
  }

  return (
    <React.Fragment>
      <div className="more-page">
        <div className="b-more">
          <div className="more-profile">
            <h2>{firstName + ' ' + lastName}</h2>
            <h3>{username}</h3>
            <div className="profile-photo">
              <img src={user.imagePath || profilepic} alt="" />
            </div>
          </div>
        </div>
        <div className="more-list-wrapper">
          <div className="more-list">
            <ul>
              <li>
                <Link to="profile" className="profile-bg">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/more/terms" className="terms-bg">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/more/privacy-policy" className="terms-bg">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/more/responsible" className="responsible-bg">
                  Responsible Play
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

MorePage.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.shape({
      user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }),
    }),
    PropTypes.bool,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(toJS(MorePage));
