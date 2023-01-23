import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

const Modal = (props) => {
  const { showModal, children, setShowModal, setSearchQuery, searchQuery } = props;

  const analyticsEvent = () => (
    ReactGA.event({
      category: 'Ticket Explorer Search',
      action: `Search query: ${searchQuery}.`
    })
  )
  
  return (
    <CSSTransition in={showModal} timeout={200}>
      <div className="form-modal" id="explore-open">
        <CSSTransition in={showModal} timeout={200}>
          <div className="content-modal">{children}</div>
        </CSSTransition>
        <div
          className="backdrop"
          onClick={() => {
            setShowModal(!showModal);
            setSearchQuery('');
            analyticsEvent();
          }}
        >
          {' '}
        </div>
      </div>
    </CSSTransition>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setShowModal: PropTypes.func.isRequired,
};

export default Modal;
