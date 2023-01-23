import React, { useEffect, useState, useMemo } from 'react';
// import Hammer from 'hammerjs';
import Hammer from 'react-hammerjs';
import { useSprings } from 'react-spring';
import PropTypes from 'prop-types';
import './swiper.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Ticket from './Ticket';
import Loader from '../../../components/Loader/Loader';
import { toJS } from '../../../../utils/toJS';
import DetailsModal from './DetailsModal'
// import SingleTicket
import {
  setRecommendedPage,
  fetchRecommends,
  setSlide,
  resetRecommended
} from '../../../../redux/actions/lotteriesActions';

import { getRecommendsState, getRecommendsFilter, getRecommendsPreset, getBreakeven } from '../../../../redux/reducers/recommendsReducer';

const Swiper = (props) => {
  const {
    price: filter,
    preset,
    recommends,
    fetchRecommends,
    setSlide,
    setRecommendedPage,
    resetRecommended,
    history,
    breakeven,
  } = props;
  const {
    slide,
    lotteries,
    page,
    isFetching,
    hasMore,
  } = recommends;

  const [showModalDitails, setShowModalDetails] = useState(false);

  useEffect(() => {
    fetchRecommends(page, filter, preset, breakeven);
    set((i) => {
      const display = i < slide - 1 || i > slide + 1 ? 'none' : 'flex';
      const opacity = i !== slide ? 0 : 1;
      const dirOfGone = i < slide ? -1 : i > slide ? 1 : 0;
      const x = dirOfGone * (50 + window.innerWidth);
      return {
        x,
        rot: 0,
        scale: 1,
        y: 0,
        opacity,
        display,
      };
    });
  }, [filter, preset, breakeven]);

  const [aprops, set] = useSprings(lotteries.length, (i) => {
    const display = i < slide - 1 || i > slide + 1 ? 'none' : 'flex';
    const opacity = i !== slide ? 0 : 1;
    const dirOfGone = i < slide ? -1 : i > slide ? 1 : 0;
    const x = dirOfGone * (50 + window.innerWidth);

    return {
      x,
      rot: 0,
      scale: 1,
      y: 0,
      opacity,
      display,
    };
  });

  const onTapNext = function (e) {
    const { isFinal } = e;
    const dir = -1;
    const down = !isFinal;
    const trigger = true;
    let display = 'none';
    set((i) => {
      if (isFinal && trigger) {
        if (slide === lotteries.length - 1) return;
        onSlideChange(slide + 1);
      }
      // Dont display if too far from curretSlide
      if (i < slide - 1 || i > slide + 1) return { display };

      let isGone = 0;
      let opacity = 0;
      // Get left/ right position for gone tickets, set opacity 0 for gone tickets
      if (i < slide || i > slide) {
        if (i < slide) {
          isGone = -1;
        } else if (i > slide) {
          isGone = 1;
        }
        opacity = 0;
      }

      // Trigger condition, restore display and opacity for next ticket
      if (isFinal && trigger) {
        if (i === slide + 1 && slide !== lotteries.length - 1) {
          isGone = 0;
          display = 'flex';
          opacity = 1;
        }
      }
      // Position for non-displayed tickets
      let x = isGone * (200 + window.innerWidth);

      // Props for non-displayed tickets
      if (i !== slide) {
        return {
          x,
          opacity,
          display,
        };
      }
      // Displayed ticket, opacity always 1
      opacity = 1;

      // Gone condition
      isGone = false;
      if (!down && trigger) {
        // Not gone if last or first ticket
        if (slide === lotteries.length - 1) {
          isGone = false;
        }
        isGone = true;
      }
      // Position for displayed ticket
      x = (200 + window.innerWidth) * dir;

      return {
        x,
        display: 'flex',
        delay: undefined,
        opacity,
        rot: 0,
        scale: 1,
        y: 0,
      };
    });
  };

  const onTapPrev = function (e) {
    const { isFinal } = e;
    const dir = 1;
    const down = !isFinal;
    const trigger = true;
    let display = 'none';
    set((i) => {
      if (isFinal) {
        if (slide === 0) return;
        onSlideChange(slide - 1);
      }
      // Dont display if too far from curretSlide
      if (i < slide - 1 || i > slide + 1) return { display };

      let isGone = 0;
      let opacity = 0;
      // Get left/ right position for gone tickets, set opacity 0 for gone tickets
      if (i < slide || i > slide) {
        if (i < slide) {
          isGone = -1;
        } else if (i > slide) {
          isGone = 1;
        }
        opacity = 0;
      }

      // Trigger condition, restore display and opacity for next ticket
      if (isFinal) {
        if (i === slide - 1 && slide !== 0) {
          isGone = 0;
          display = 'flex';
          opacity = 1;
        }
      }

      // Position for non-displayed tickets
      let x = isGone * (200 + window.innerWidth);

      // Props for non-displayed tickets
      if (i !== slide) {
        return {
          x,
          opacity,
          display,
        };
      }
      // Displayed ticket, opacity always 1
      opacity = 1;
      // Gone condition
      isGone = false;
      if (!down && trigger) {
        // Not gone if last or first ticket
        if (slide === 0) {
          isGone = false;
        }
        isGone = true;
      }
      // Position for displayed ticket
      x = (200 + window.innerWidth) * dir;

      return {
        x,
        display: 'flex',
        delay: undefined,
        opacity,
        rot: 0,
        scale: 1,
        y: 0,
      };
    });
  };

  const onPan = function (e) {
    const { additionalEvent, angle, isFinal } = e;

    if (additionalEvent === "panright") {
      if (slide !== 0 && isFinal) {
        onTapPrev(e);
        // onSlideChange(slide - 1);
      }
    } else if (additionalEvent === "panleft") {
      if (slide !== lotteries.length - 1 && isFinal) {
        onTapNext(e);
        // onSlideChange(slide + 1);
      }
    } else if ((angle < -112.5 && angle > -157.5) || (angle > 112.5 && angle < 157.5) || (-22.5 > angle && angle > -67.5) || (angle > 22.5 && angle < 67.5)) {
      set((i) => {
        const display = i < slide - 1 || i > slide + 1 ? 'none' : 'flex';
        const opacity = i !== slide ? 0 : 1;
        const dirOfGone = i < slide ? -1 : i > slide ? 1 : 0;
        const x = dirOfGone * (50 + window.innerWidth);
        return {
          x,
          rot: 0,
          scale: 1,
          y: 0,
          opacity,
          display,
        };
      });
    }

  };

  const onSlideChange = (slide) => {
    setSlide(slide);
    // Pagination
    if (slide >= lotteries.length - 3 && !isFetching && hasMore) {
      setRecommendedPage(page);
    }
  };

  const onTapDetails = function (e) {
    if (e.isFinal) {
      setShowModalDetails(true);
    }
  };

  const renderSlides2 = () => {
    return aprops.map((aprops, i) => {
      const display = i < slide - 1 || i > slide + 1 ? 'none' : 'flex';
      if (i < slide - 1 || i > slide + 1) return;
      return (
        <Ticket
          key={lotteries[i].id}
          {...aprops}
          count={lotteries.length}
          display={display}
          filter={filter}
          i={i}
          slide={slide}
          lottery={lotteries[i]}
          onTap={onTapDetails}
          preset={preset}
          breakeven={breakeven}
          lotteries={lotteries}
        />
      );
    });
  }

  return (
    <>
      <Hammer
        className="slider"
        onPan={(e) => {
          onPan(e);
        }}
        options={{ touchAction: 'pan-y' }}
      >
        <div >
          {isFetching ? (
            <Loader style={{ position: 'absolute', left: '45%' }} />
          ) : (
              renderSlides2()
            )}
        </div>
      </Hammer>

      {
        !(slide === 0) && (
          <Hammer
            onTap={(e) => {
              onTapPrev(e);
            }}
          >
            <div className="a-prev-wrapper">
              <span>prev ticket</span>
            </div>
          </Hammer>
        )
      }

      {
        !(slide === lotteries.length - 1) && (
          <Hammer
            onTap={(e) => {
              onTapNext(e);
            }}
          >
            <div className="a-next-wrapper">
              <span>next ticket</span>
            </div>
          </Hammer >
        )
      }
      {showModalDitails ? <DetailsModal lottery={lotteries[slide]} setShowModalDetails={setShowModalDetails} breakeven={breakeven} /> : ''}
    </>
  );
};

Swiper.propTypes = {
  recommends: PropTypes.shape({
    page: PropTypes.number.isRequired,
    hasMore: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    slide: PropTypes.number.isRequired,
    preset: PropTypes.string.isRequired,
    lotteries: PropTypes.array,
    filter: PropTypes.number.isRequired,
    breakeven: PropTypes.bool.isRequired,
  }),
  fetchRecommends: PropTypes.func.isRequired,
  setSlide: PropTypes.func.isRequired,
  setRecommendedPage: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({
  recommends: getRecommendsState(state),
  price: getRecommendsFilter(state),
  preset: getRecommendsPreset(state),
  breakeven: getBreakeven(state),
});

export default connect(
  mapStateToProps,
  { fetchRecommends, setSlide, setRecommendedPage, resetRecommended },
)(toJS(withRouter(Swiper)));