import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import toBux from '../../../../utils/toBux';
import './ticket.scss';
import DetailsModal from '../../TicketRecommendations/components/DetailsModal';
import { ROOT_URL } from '../../../../env';

const Ticket = (props) => {
  const { ticket } = props;
  const {
    name = 'Ticket',
    topPrize = 0,
    ticketPrice = 0,
    previewImageName,
  } = ticket;

  // For later api version
  const isHot = ticket.hot || false;
  const isNew = ticket.new || false;
  const isRare = ticket.rare || false;

  return (
    <>
      <div
        style={{
          cursor: 'pointer',
          WebkitTransform: 'translate3d(0,0,0)',
          height: '500px',
        }}
        className={'ticket ' + (isHot ? 'hot-ticket' : isNew ? 'new-ticket' : '')}
        onClick={() => {
          props.onClick();
        }}
      >
        <div className="img-ticket">
          <LazyLoad offsetVertical={350}>
            <img
              src={ROOT_URL + previewImageName || ticket.imageName}
              alt="ticket"
            />
          </LazyLoad>
        </div>
        <div className="ticket-explorer-wrapper">
          <div className="s-ticket">
            {isHot && (
              <div className="ticket-hot">
                <h2>Hot</h2>
                <h3>Ticket</h3>
              </div>
            )}
            {isNew && (
              <div className="ticket-new">
                <h2>New</h2>
                <h3>Ticket</h3>
              </div>
            )}
            {isRare && (
              <div className="ticket-rare">
                <h2>Rare</h2>
                <h3>Ticket</h3>
              </div>
            )}
          </div>
          <div className="text-ticket">
            <h2>{name}</h2>
            <div className="counts-ticket">
              <h3>
                <span className="icon-combined" />
                {' $' + (toBux(ticketPrice.amount) || ticketPrice)}
              </h3>
              <h3>
                <span className="icon-shape" />
                {' $' + (toBux(topPrize.amount) || topPrize)}
              </h3>
            </div>
          </div>
        </div >
      </div >
    </>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    previewImageName: PropTypes.string.isRequired,
    topPrize: PropTypes.object.isRequired,
    ticketPrice: PropTypes.object.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default React.memo(withRouter(Ticket), () => {
  return true;
});
