import React from 'react';
import '../../../styles/icomoon.css';
import './responsible.scss';
import { Link } from 'react-router-dom';
import resPic from '../../../img/responsivenew.jpg';

const Responsible = () => {
  return (
    <div
      className="full-screen rp-body b-modal"
      style={{
        minWidth: '100%',
        minHeight: '100%',
      }}
    >
      <div
        className="responsible-container"
        style={{
          margin: '0 auto',
          maxWidth: '500px',
          minHeight: '100%',
        }}
      >
        <div className="header">
          <div className="white">
            <h2>Responsible Play</h2>
            <Link to="/more">
              <span className="icon-left-arrow" />
              <br />
              <p >Back</p>
            </Link>
          </div>
        </div >
        <div className="rp-block">
          <div className="img">
            <img src={resPic} alt="" />
          </div>
          <p
            style={{
              width: 'unset',
            }}
          >
            If you suspect you or a loved one has a gambling problem, call this
            number to get help now:
          </p>
          <h2>1-401-499-2472</h2>
        </div>

        <div
          className="pos-bottom-4p"
          style={{
            maxWidth: '500px',
          }}
        >
          <button
            type="button"
            className="btn-stl btn-yellow modal-open"
            htmlFor="call-modal-open"
            style={{ cursor: 'pointer' }}
          >
            <a
              href="tel:1-401-499-2472"
            >
              CALL
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Responsible;
