/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import Hammer from 'react-hammerjs';
import { animated, interpolate } from 'react-spring';
import PropTypes from 'prop-types';

import toBux from '../../../../utils/toBux';
import buyTwo from '../../../../img/SVG/buy-two.svg';
import noJackpotImage from '../../../../img/SVG/no-jackpot.svg';
import Prize from '../../../../img/SVG/prize.svg';
import JackpotImage from '../../../../img/SVG/jackpot.svg';
import Hint from './Hint';
import TicketRecommendations from '../TicketRecommendations'
import {ROOT_URL} from '../../../../env';

const numberToWords = require('number-to-words');

const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

const Ticket = (props) => {
  const {
    lottery,
    x,
    scale,
    display,
    filter,
    i,
    preset,
    onTap,
    breakeven,
    lotteries
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [typeHint, setTypeHint] = useState('');
  const isHot = lottery.hot || false;
  const isNew = lottery.new || false;
  const isRare = lottery.rare || false;
  const ticketPrice = toBux(lottery.ticketPrice.amount);
  const isX2 =
    Math.floor(filter / ticketPrice) === 1
      ? false
      : Math.floor(filter / ticketPrice);

  const noJackpot = lottery.topPrize.amount / 100 < 10000;

  const handleCloseModal = () => {
    setShowModal(false);
  }

  let numTypes = 0;
  if (isHot || isNew) {
    numTypes = true;
  } else {
    numTypes = false;
  }
  const statement = () => {

    if (preset === 'anyPrize') {
      if (breakeven) {
        return <h4>1 in {(1 / lottery.anyPrizeOdds).toFixed(2)} wins</h4>
      } else {
        return <h4>1 in {(1 / lottery.anyPrizeWithoutBreakeven).toFixed(2)} wins</h4>
      }
    } else if (preset === 'jackpot') {
      let averageJacpot = 0;
      let inc = 0;
      let searchStatsAverageJackpot = 0;
      let pow = !isX2 ? 1 : isX2;

      for (let i = 0; i < lotteries.length; i++) {
        if ((filter * 100) === lotteries[i].ticketPrice.amount) {
          averageJacpot += lotteries[i].jackpotOddsAtStart;
          inc++;
        }
      }

      let averageSumAnyPrize = averageJacpot / inc;
      searchStatsAverageJackpot = 1 - Math.pow((1 - lottery.jackpotOdds), pow);

      if (searchStatsAverageJackpot < averageSumAnyPrize) {
        return <h4><span className="worse-text">Worse</span> than average ticket</h4>
      } else if ((searchStatsAverageJackpot / averageSumAnyPrize) > 2) {
        return <h4><span className="better-text">{(searchStatsAverageJackpot / averageSumAnyPrize).toFixed(1)}X</span> Better than average ticket</h4>
      } else {
        return <h4><span className="better-text">Better</span> than average ticket</h4>
      }
    } else if (preset === 'bestValue') {
      let averageBestValue = 0;
      let inc = 0;
      let searchStatsAverageBestValue = 0;

      for (let i = 0; i < lotteries.length; i++) {
        if ((filter * 100) === lotteries[i].ticketPrice.amount) {
          if (breakeven) {
            averageBestValue += lotteries[i].bestValueAtStart;
          } else {
            averageBestValue += lotteries[i].bestValueWithoutBreakevenAtStart;
          }
          inc++;
        }
      }

      let averageSumBestValue = averageBestValue / inc;
      searchStatsAverageBestValue = (breakeven ? lottery.bestValue : lottery.bestValueWithoutBreakeven) * (filter / (lottery.ticketPrice.amount / 100));

      if (searchStatsAverageBestValue < averageSumBestValue) {
        return <h4><span className="worse-text">Worse</span> than average ticket</h4>
      } else {
        return <h4><span className="better-text">Better</span> than average ticket</h4>
      }
    }
  }

  return (
    <>
      <div className="block1">
        <div className="block2">
          <animated.div
            className={
              'ticket-info-wrapper' + ' ' + 'ticket-info-wraper-left' + ' ' +
              (isHot ? 'hot-ticket' : isNew ? 'new-ticket' : isRare ? 'rare-ticket' : '')
            }
            style={{
              zIndex: '1',
              transform: interpolate(
                [x, scale],
                (x, scale) =>
                  `${
                  isFirefox ? '' : `scale(${scale}) `
                  }translate3d(${x}px, 0, 0)`,
              ),
            }}
            key={lottery.id}
          >
            <div className="ticket-info">
              <div className="ticket-rank">
                <h2>{lottery.name}</h2>
                <div>
                  <h3>#{i + 1} ticket rank</h3>
                </div>
                {statement()}
              </div>
              <div className="ticket-cover">
                <div className="img-wrapper">
                  <img
                    src={ROOT_URL + lottery.previewImageName || lottery.imageName}
                    style={{ objectFit: 'cover' }}
                    alt=""
                  />
                </div>
                <div className="s-ticket">
                  {isHot && (
                    <div className="open-modal"
                      onClick={(e) => {
                        e.preventDefault();
                        setTypeHint('isHot');
                        setShowModal(!showModal);
                      }}>
                      <div className="ticket-hot">
                        <h2>Hot</h2>
                        <h3>Ticket</h3>
                      </div>
                    </div>
                  )}
                  {isRare && (
                    <div className="open-modal"
                      onClick={(e) => {
                        e.preventDefault();
                        setTypeHint('isRare');
                        setShowModal(!showModal);
                      }}>
                      <div className="ticket-rare">
                        <h2>Rare</h2>
                        <h3>Ticket</h3>
                      </div>
                    </div>
                  )}
                  {isNew && (
                    <div className="open-modal"
                      onClick={(e) => {
                        e.preventDefault();
                        setTypeHint('isNew');
                        setShowModal(!showModal);
                      }}
                      style={{ cursor: 'pointer' }}>
                      <div className="ticket-new">
                        <h2>New</h2>
                        <h3>Ticket</h3>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="ticket-about">
                <div
                  className="flex-between-w100 counts-ticket"
                  style={{ justifyContent: 'space-around', cursor: 'pointer', }}
                >
                  {isX2 && (
                    <div className="ticket-prize open-modal"
                      onClick={(e) => {
                        e.preventDefault();
                        setTypeHint('isX2');
                        setShowModal(!showModal);
                      }}>
                      <div className="img-wrapper">
                        <img src={Prize} alt="" />
                      </div>
                      <div>
                        <h3>Price</h3>
                        <h2>
                          <span>{' $' + ticketPrice}</span> Buy {capitalize(numberToWords.toWords(isX2))}
                        </h2>
                      </div>
                    </div>
                  )}
                  {!isX2 && (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        setTypeHint('ticketPrice');
                        setShowModal(!showModal);
                      }}
                      style={{
                        display: 'flex',
                      }}>
                      <div className="img-wrapper">
                        <img src={Prize} alt="" />
                      </div>
                      <div>
                        <h3>Price</h3>
                        <h2>
                          <span>{' $' + ticketPrice}</span>
                        </h2>
                      </div>
                    </div>
                  )
                  }
                  {noJackpot && (
                    <div className="ticket-jackpot open-modal"
                      onClick={(e) => {
                        e.preventDefault();
                        setTypeHint('noJackpot');
                        setShowModal(!showModal);
                      }}>
                      <div className="img-wrapper">
                        <img src={noJackpotImage} alt="" />
                      </div>
                      <div>
                        <h3>Jackpot</h3>
                        <h2>No Jackpot</h2>
                      </div>
                    </div>
                  )}
                  {!noJackpot && (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        setTypeHint('jackpot');
                        setShowModal(!showModal);
                      }}
                      style={{
                        display: 'flex',
                      }}>
                      <div className="img-wrapper">
                        <img src={JackpotImage} alt="" />
                      </div>
                      <div>
                        <h3>Jackpot</h3>
                        <h2>
                          <span>{' $' + toBux(lottery.topPrize.amount)}</span>
                        </h2>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="wrapper-btn">
              <Hammer
                onTap={(e) => {
                  onTap(e);
                }}>
                <button id="btn-ticket-details">
                  View Ticket Details
            </button>
              </Hammer>
            </div>
          </animated.div >
        </div>
      </div>
      {showModal ? <div className='background_hint-modal'
        onTouchStart={(e) => {
          e.preventDefault();
          { showModal && (setShowModal(!showModal)) }
        }}
      /> : ''}

      {showModal ?
        <Hint
          typeHint={typeHint}
          handler={handleCloseModal}
          ticketPrice={ticketPrice}
          numberToWords={numberToWords}
          isX2={isX2}
          topPrize={lottery.topPrize.amount}
          numTypes={numTypes}
        />
        : ''}
    </>
  );
};

Ticket.propTypes = {
  lottery: PropTypes.object.isRequired,
  x: PropTypes.object.isRequired,
  scale: PropTypes.object.isRequired,
  display: PropTypes.string.isRequired,
  filter: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
};

export default React.memo(Ticket, (a, b) => {
  if (a.display !== b.display || a.count !== b.count) {
    return false;
  }
  return true;
});

function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1);
}