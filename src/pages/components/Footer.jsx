import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAction } from '../../redux/actions/authActions';

const Footer = () => {
  return (
    <footer
      style={{
        justifyContent: 'center',
        height: '3rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100vw',
          paddingBottom: '2%',
          maxWidth: '500px',
        }}
      >
        <NavLink to="/best">
          <span className="icon-ticket" />
          <p
            style={{
              position: 'absolute',
              transform: 'translateX(-17px)',
            }}
          >
            {' '}
            Best Ticket
          </p>
        </NavLink>
        <NavLink to="/" exact>
          <span className="icon-explorer" />
          <p
            style={{
              position: 'absolute',
              transform: 'translateX(-10px)',
            }}
          >
            Explorer
          </p>
        </NavLink>
        <NavLink to="/more">
          <span className="icon-more" />
          <p
            style={{
              position: 'absolute',
            }}
          >
            More
          </p>
        </NavLink>
      </div>
    </footer>
  );
};

export default connect(
  null,
  { logoutAction },
)(Footer);
