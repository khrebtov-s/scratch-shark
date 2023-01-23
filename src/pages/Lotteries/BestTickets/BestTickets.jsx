/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './best.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toJS } from '../../../utils/toJS';
import TicketRecommendations from '../TicketRecommendations/TicketRecommendations'

import { Input } from 'reactstrap';
import { getGuideState } from '../../../redux/reducers/authReducer';
import { completeGuide } from '../../../redux/actions/authActions';

// actions
import {
  changePreset,
  changeRecommendsFilter,
  resetRecommended,
  checkBreakeven,
  fetchRecommends,
  setSlide
} from '../../../redux/actions/lotteriesActions';
import { setState, fetchStates } from '../../../redux/actions/statesActions';
// selectors
import { getRecommendsPreset, getBreakeven, getRecommendsFilter } from '../../../redux/reducers/recommendsReducer';
import { getStatesState } from '../../../redux/reducers/statesReducer';

// components
import Footer from '../../components/Footer';
import Preset from './components/Preset';
import CheckBox from '../../components/CheckBox/CheckBox';
import BestTicketSelect from './components/BestTicketSelect';
import SelectState from './components/SelectState';
import ReactGA from 'react-ga';

const BestTickets = (props) => {
  const [showModalRank, setShowModalRank] = useState(false);
  const [showModalSpend, setShowModalSpend] = useState(false);
  const [showModalState, setShowModalState] = useState(false);
  const [firstLoadState, setFirstLoadState] = useState(true);
  const [firstLoadRank, setFirstLoadRank] = useState(true);
  const [firstLoadSpend, setFirstLoadSpend] = useState(true);
  const [currentGuide, setCurrentGuide] = useState(0);
  const [priceForAnalytics, setPriceForAnalytics] = useState(0)
  const [presetForAnalytics, setPresetForAnalytics] = useState(0)

  const {
    guide,
    completeGuide,
    preset,
    price,
    changePreset,
    resetRecommended,
    checkBreakeven,
    changeRecommendsFilter,
    fetchRecommends,
    states,
    setState,
    fetchStates,
    breakeven,
    setSlide
  } = props;

  const { items, currentState } = states;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (items.length === 0) {
      fetchStates(1);
    }
  }, []);

  const handlePresetChange = (preset) => {
    setPresetForAnalytics(preset)
    setShowModalRank(false);
    changePreset(preset);
    setFirstLoadRank(false);
  };

  const handlePriceChange = (price) => {
    setPriceForAnalytics(price)
    setShowModalSpend(false);
    setFirstLoadSpend(false);
    changeRecommendsFilter(price);

  };

  const handleBreakevenCheck = () => {
    checkBreakeven(!breakeven);
  };

  const handleStateChange = () => {
    setShowModalState(false);
    setFirstLoadState(false);
  };

  const desiredSpend = (price) => {
    const spendArray = [25, 20, 10, 5, 3, 2, 1];
    let resSpendArr = spendArray.filter(function (number) {
      return number === price;
    });
    return `$${resSpendArr} Spend`
  }

  const findTickets = () => {
    setSlide(0);
    ReactGA.event({
      category: 'Find Your Ticket',
      action: `Parameters: 
      ${presetForAnalytics},
      ${priceForAnalytics}$.`
    });
  };

  return (
    <div className="bg-blue-gradient">
      <div className="bg-splash bg-splash2">
        <div
          className="full-screen bg-logo-text bg-logo-text-beta padding-4p pb-9r"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
          onClick={(e) => {
            e.preventDefault();
            { showModalState && (setShowModalState(!showModalState)) }
            { showModalSpend && (setShowModalSpend(!showModalSpend)) }
            { showModalRank && (setShowModalRank(!showModalRank)) }
          }}
        >

          <div className="best-ticket-container">
            {/* <p className="available-location">Now available in Rhode Island</p> */}
            <a
              className="state marker triangle-icon mb-5r"
              onClick={(e) => {
                e.preventDefault();
                setShowModalState(!showModalState);
              }}
            >
              {currentState.name}
            </a>
            <a
              className="state marker triangle-icon mb-5r "
              onClick={(e) => {
                e.preventDefault();
                setShowModalRank(!showModalRank);
              }}
              style={
                ((firstLoadRank && !guide) ? { color: '#979797' } : { color: 'black' })
              }
            >

              {preset === 'jackpot'
                ? 'Best Odds: Jackpot'
                : preset === 'bestValue'
                  ? 'Best Value'
                  : preset === 'anyPrize'
                    ? 'Best Odds: Any Prize'
                    : 'Ticket Rank Method'}
            </a>

            <div>
              <a
                className="state marker triangle-icon mb-5r "
                onClick={(e) => {
                  e.preventDefault();
                  setShowModalSpend(!showModalSpend);
                }}
                style={
                  ((firstLoadSpend && !guide) ? { color: '#979797' } : { color: 'black' })
                }
              >
                {(firstLoadSpend && !guide)
                  ? 'Desired Spend'
                  : desiredSpend(price)}
              </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Include breakeven prizes</h3>
              <Input
                className="checkbox-input"
                id="withBreakEven"
                type="checkbox"
                checked={breakeven}
                onChange={() => handleBreakevenCheck()}
                key={breakeven}
              />
            </div>

            <Link
              style={{
                marginBottom: '3rem',
              }}
              to={
                ((!firstLoadRank && !firstLoadSpend || guide) ? '/recommended' : '/best')
              }
              className={
                'btn-stl ' + ((!firstLoadRank && !firstLoadSpend || guide) ? 'btn-yellow' : 'btn-grey')
              }
              onClick={findTickets}
            >
              Find Your Ticket
            </Link>
          </div>
        </div>
      </div >
      <Footer />
      {showModalRank && <Preset preset={preset} handler={handlePresetChange} />}
      {showModalSpend && <BestTicketSelect price={price} handler={handlePriceChange} />}
      {showModalState && <SelectState handler={handleStateChange} />}
    </div >
  );
};

BestTickets.propTypes = {
  changePreset: PropTypes.func.isRequired,
  resetRecommended: PropTypes.func.isRequired,
  states: PropTypes.object,
  setState: PropTypes.func.isRequired,
  fetchStates: PropTypes.func.isRequired,
  breakeven: PropTypes.bool.isRequired,
  checkBreakeven: PropTypes.func.isRequired,
  setSlide: PropTypes.func.isRequired,
};

BestTickets.defaultProps = {
  states: {},
};

const mapStateToProps = (state) => ({
  guide: getGuideState(state),
  states: getStatesState(state),
  preset: getRecommendsPreset(state),
  breakeven: getBreakeven(state),
  price: getRecommendsFilter(state),
});

export default connect(
  mapStateToProps,
  {
    completeGuide,
    changePreset,
    changeRecommendsFilter,
    resetRecommended,
    setState,
    fetchStates,
    checkBreakeven,
    setSlide,
  },
)(toJS(BestTickets));
