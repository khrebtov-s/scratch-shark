import React, { useState, useEffect } from 'react';
import { MDBSelect } from "mdbreact";
// import SelectSearch from 'react-select-search';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from '../../components/Footer';
import './recommendations.scss';
import Swiper from './components/Swiper';
import OnBoarding from './components/OnBoarding';
import SelectSpend from './components/selects/SelectSpend';
import SelectRank from './components/selects/SelectRank';
import SelectBreakeven from './components/selects/SelectBreakeven';

import { completeGuide } from '../../../redux/actions/authActions';

import { toJS } from '../../../utils/toJS';
// actions
import {
  changePreset,
  changeRecommendsFilter,
  resetRecommended,
  checkBreakeven,
  setSlide,
} from '../../../redux/actions/lotteriesActions';
import { setState, fetchStates } from '../../../redux/actions/statesActions';
// selectors
import { getRecommendsPreset, getBreakeven, getRecommendsFilter, getRecommendsState, } from '../../../redux/reducers/recommendsReducer';
import { getStatesState } from '../../../redux/reducers/statesReducer';

const TicketRecommendations = (props) => {
  const {
    completeGuide,
    preset,
    changePreset,
    price,
    changeRecommendsFilter,
    checkBreakeven,
    resetRecommended,
    breakeven,
    setSlide,
    recommends,
  } = props;
  const { slide } = recommends;
  const [showSelectSpend, setShowSelectSpend] = useState(false);
  const [showSelectRank, setShowSelectRank] = useState(false);
  const [showSelectBreakeven, setShowSelectBreakeven] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(0)

  const handlePresetChange = (preset) => {
    setSlide(0);
    setShowSelectRank(false);
    changePreset(preset);
  };
  const handlePriceChange = (price) => {
    setSlide(0);
    setShowSelectSpend(false);
    changeRecommendsFilter(Number(price));
  };

  const handleBreakevenCheck = (breakeven) => {
    setSlide(0);
    setShowSelectBreakeven(false);
    checkBreakeven(breakeven);
  };

  const desiredSpend = (price) => {
    const spendArray = [25, 20, 10, 5, 3, 2, 1];
    let resArr = spendArray.filter(function (number) {
      return number === price;
    });
    return `$${resArr} Spend`
  }

  const Filter = () => (
    <div className="ticket-filters" >
      <a
        className="select select-marker"
        onClick={(e) => {
          e.preventDefault();
          setShowSelectSpend(!showSelectSpend);
        }}
        style={
          { color: 'white' }
        }
      >
        {desiredSpend(price)}
      </a>
      <a
        className="select select-marker"
        onClick={(e) => {
          e.preventDefault();
          setShowSelectRank(!showSelectRank);
        }}
        style={
          { color: 'white' }
        }
      >
        {preset === 'jackpot'
          ? 'Jackpot'
          : preset === 'bestValue'
            ? 'Value'
            : preset === 'anyPrize'
              ? 'Any Prize'
              : 'Rank Method'}
      </a>
      <a
        className="select select-marker"
        onClick={(e) => {
          e.preventDefault();
          setShowSelectBreakeven(!showSelectBreakeven);
        }}
        style={
          { color: 'white' }
        }
      >
        {breakeven === true
          ? 'Incl. B/E'
          : breakeven === false
            ? 'Excl. B/E'
            : ''}
      </a>
    </div >
  );

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

  const { width } = useWindowDimensions();

  return (
    <div
      className="bg-blue-gradient full-screen p-rt"
      style={{ overflow: 'hidden' }}
      onClick={(e) => {
        e.preventDefault();
        { showSelectSpend && (setShowSelectSpend(!showSelectSpend)) }
        { showSelectRank && (setShowSelectRank(!showSelectRank)) }
        { showSelectBreakeven && (setShowSelectBreakeven(!showSelectBreakeven)) }
      }}
    >
      {showFilterModal ? <Filter /> : ''}
      <div className="header">
        <div
          className="explorer flex-between-w100 white"
          style={{
            maxWidth: '500px',
            position: 'unset',
          }}
        >
          <Link to="/best" className="header-back">
            <span className="icon-left-arrow"/>
            <p>Back</p>
          </Link>
          <h2>Ticket Recommendation</h2>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setShowFilterModal(!showFilterModal);
            }}
            className={showFilterModal ? 'icon-equalizer-close' : 'icon-equalizer2 modal-open'}
            htmlFor="explore-open"
          />
        </div>
      </div>
      <div className="best-container" id="best-container">
        <Swiper />
      </div>
      {showSelectSpend && <SelectSpend price={price} handler={handlePriceChange} />}
      {showSelectRank && <SelectRank preset={preset} handler={handlePresetChange} />}
      {showSelectBreakeven && <SelectBreakeven breakeven={breakeven} handler={handleBreakevenCheck} />}
    </div >
  );
};

TicketRecommendations.propTypes = {
  preset: PropTypes.string.isRequired,
  changePreset: PropTypes.func.isRequired,
  resetRecommended: PropTypes.func.isRequired,
  states: PropTypes.object,
  setState: PropTypes.func.isRequired,
  fetchStates: PropTypes.func.isRequired,
  breakeven: PropTypes.bool.isRequired,
  checkBreakeven: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  setSlide: PropTypes.func.isRequired,
};
TicketRecommendations.defaultProps = {
  states: {},
};

const mapStateToProps = (state) => ({
  preset: getRecommendsPreset(state),
  states: getStatesState(state),
  breakeven: getBreakeven(state),
  price: getRecommendsFilter(state),
  recommends: getRecommendsState(state),
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
)(toJS(TicketRecommendations));

