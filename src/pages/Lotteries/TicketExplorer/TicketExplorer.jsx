import React, { useState, useEffect, useRef, createRef } from 'react';
import { TextField, Typography } from '@material-ui/core';
import './TicketExplorer.scss';
import { Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import PropTypes from 'prop-types';
import Ticket from './components/Ticket';
import Footer from '../../components/Footer';
import {
  changeExplorerPriceFilter,
  fetchExplorer,
  resetExplorer,
  changeSearch,
  checkBreakeven,
} from '../../../redux/actions/lotteriesActions';

import { toJS } from '../../../utils/toJS';
import Loader from '../../components/Loader/Loader';
import SliderComponent from '../components/SliderComponent/SliderComponent';
import Modal from './components/Modal';
import { getExplorerState } from '../../../redux/reducers/explorerReducer';
import { getBreakeven } from '../../../redux/reducers/recommendsReducer';
import ReactGA from 'react-ga';

const TicketExplorer = (props) => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [sliderValue, setSliderValue] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const scrollRef = useRef();
  const scrollRef2 = useRef();

  const {
    changeExplorerPriceFilter,
    resetExplorer,
    fetchExplorer,
    changeSearch,
    explorer,
    checkBreakeven,
    breakeven,
  } = props;

  const {
    lotteries,
    filter,
    page,
    error,
    isFetching,
    search,
    hasMore,
  } = explorer;

  const priceFilterValues = [1, 2, 3, 5, 10, 20, 25];

  // create our ref
  const myInput = useRef();

  // This is equivalent to our componentDidMount, this will focus
  if (showSearchModal) {
    useEffect(() => myInput.current.focus());
  } else {
     useEffect(() => myInput.current.blur());
  }

  useEffect(() => {
    if (props.location.state && props.location.state.scrollTo) {
      scrollRef2.current.scrollTo(0, props.location.state.scrollTo);
    }
    // Sets slider value to global explorer price filter
    setSliderValue(priceFilterValues.indexOf(filter));
    setSearchQuery(search);
    checkBreakeven(true);
  }, []);

  useEffect(() => {
    if (props.location.state && props.location.state.scrollTo) {
      window.scrollTo(0, props.location.state.scrollTo);
    }
  }, []);

  const acceptFilter = () => {
    ReactGA.event({
      category: 'Ticket Explorer Search',
      action: `Price: ${priceFilterValues[sliderValue]}$.`
    });
    setShowFilterModal(false);
    // Do nothing if filter didn't change
    if (filter === priceFilterValues[sliderValue] && !search) return;
    // Reset search filter
    setSearchQuery('');
    changeSearch('');

    changeExplorerPriceFilter(priceFilterValues[sliderValue]);
    window.scrollTo(0, 0);
    // Remove lotteries from array and fetch first page with new parameters
    resetExplorer();
    if (!hasMore) {
      scrollRef.current.props.loadMore(1);
    }
    scrollRef.current.pageLoaded = 1;
  };

  const dissmissFilter = () => {
    setShowFilterModal(false);
    setSliderValue(priceFilterValues.indexOf(filter));
  };

  const acceptSearch = () => {
    ReactGA.event({
      category: 'Ticket Explorer Search',
      action: `Search query: ${searchQuery}.`
    });
    window.scrollTo(0, 0);
    setShowSearchModal(false);
  };

  const dismissSearch = () => {
    // Resets search query
    setShowSearchModal(false);
    // Do nothing if no search results displayed
    if (!search) return;
    setSearchQuery('');
    changeSearch('');
    resetExplorer();
    if (!hasMore) {
      scrollRef.current.props.loadMore(1);
    }
    scrollRef.current.pageLoaded = 1;
  };

  const handleSliderChange = (e) => {
    const value = +e;
    setSliderValue(value);
  };

  const render = () => {
    if (error) {
      return (

        <div
          style={{
            fontSize: '2em',
            color: 'white',
            top: '40%',
            left: '20vw',
            position: 'absolute',
          }}
        >
          {error}
        </div>
      );
    }
    if (lotteries.length === 0) {
      if (isFetching) {
        return <Loader style={{ left: '45%', marginTop: '150px' }} />;
      }
      return (
        <div
          style={{
            fontSize: '2em',
            color: 'white',
            top: '40%',
            left: '20vw',
            position: 'absolute',
          }}
        >
          'No tickets found'
        </div>
      );
    }

    return lotteries.map((ticket) => {
      return (
        <Ticket
          className="explorer-ticket"
          key={ticket.id}
          ticket={ticket}
          onClick={() => {
            props.history.push({
              pathname: `/ticket/${ticket.id}`,
              state: {
                explorerScroll:
                  scrollRef2.current.scrollTop ||
                  document.documentElement.scrollTop,
              },
            });
          }}
        />
      );
    });
  };

  return (
    <div
      className={
        showFilterModal
          ? ' bg-blue-gradient full-screen p-explorer b-modal'
          : 'bg-blue-gradient full-screen p-explorer'
      }
      style={{ width: '100vw', height: '100%', margin: '0' }}
    >

      <div className="header-explorer">
        <div
          className="explorer flex-between-w100"
          style={{
            maxWidth: '500px',
            position: 'unset',
          }}
        >
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setShowFilterModal(!showFilterModal);
            }}
            className="icon-settings modal-open"
            htmlFor="explore-open"
          />
          <h2>Ticket Explorer</h2>
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setShowSearchModal(!showSearchModal)
            }
            }
            className="icon-search"
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'center',
        }}
      >
        <div
          className="ticket-block"
          ref={scrollRef2}
          style={{
            position: 'absolute',
            width: '90%',
            height: 'calc(100% - 50px)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            top: '0',
            maxWidth: '500px',
          }}
        >
          <InfiniteScroll
            id="explorer-scroller"
            ref={scrollRef}
            initialLoad
            pageStart={1}
            useWindow={false}
            loadMore={() => {
              if (hasMore) {
                fetchExplorer(page, filter, search);
              }
            }}
            getScrollParent={() => scrollRef2.current}
            hasMore={hasMore}
            style={{
              WebkitTransform: 'translate3d(0,0,0,)',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {render()}
          </InfiniteScroll>
        </div>
      </div>
      <Footer />
      <Modal showModal={showFilterModal} setShowModal={setShowFilterModal}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100vw',
            maxWidth: '500px',
          }}
        >
          <div className="explorer-modal flex-between-w100">
            <span
              style={{ cursor: 'pointer', visibility: 'hidden' }}
              onClick={() => {
                dissmissFilter();
              }}
              className="icon-cross modal-close"
            />
            <h2 className="mb-4r">Ticket Price</h2>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => {
                acceptFilter();
              }}
              className="icon-checkmark modal-close"
            />
          </div>
          <div style={{ marginTop: '55px' }}>
            <SliderComponent
              style={{ marginBottom: '30px' }}
              onChange={(e) => {
                handleSliderChange(e);
              }}
              value={sliderValue}
              min={0}
              max={priceFilterValues.length - 1}
              step={1}
              included={false}
              marks={priceFilterValues}
            />
          </div>
        </div>
      </Modal>

      <Modal showModal={showSearchModal} setShowModal={setShowSearchModal} setSearchQuery={setSearchQuery} searchQuery={searchQuery}>
        <form
          style={{
            width: '100%',
            maxWidth: '500px',
          }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="explorer-modal flex-between-w100">
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => {
                dismissSearch();
              }}
              className="icon-cross modal-close"
            />
            <span><h2>Search</h2></span>
            <button
              type="submit"
              style={{
                cursor: 'pointer',
                border: 'none',
                color: 'white',
                fontSize: '1.2rem',
                background: 'none',
              }}
              onClick={() => {
                acceptSearch();
                setSearchQuery('');
                window.focus();
                if (document.activeElement) {
                  document.activeElement.blur();
                }
              }}
              className="icon-checkmark modal-close"
            />
          </div>
          <h3 className="mb-4r">Enter ticket name:</h3>
          <TextField
            className="search-input"
            InputProps={{
              disableUnderline: true,
            }}
            inputRef={myInput}
            type="text"
            id="myInput"
            placeholder=''
            value={searchQuery}
            inputRef={myInput}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              changeSearch(e.target.value);
              // Remove lotteries from array and fetch first page with new parameters
              resetExplorer();
              if (!hasMore) {
                scrollRef.current.props.loadMore(1);
              }
              scrollRef.current.pageLoaded = 1;
            }}
          />
        </form>
      </Modal>
    </div >
  );
};

TicketExplorer.propTypes = {
  explorer: PropTypes.shape({
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    search: PropTypes.string.isRequired,
    hasMore: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    filter: PropTypes.number.isRequired,
    lotteries: PropTypes.array,
  }),
  changeExplorerPriceFilter: PropTypes.func.isRequired,
  fetchExplorer: PropTypes.func.isRequired,
  resetExplorer: PropTypes.func.isRequired,
  changeSearch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  breakeven: PropTypes.bool.isRequired,
  checkBreakeven: PropTypes.func.isRequired,
};

TicketExplorer.defaultProps = {
  explorer: {
    lotteries: [],
  },
};

const MapStateToProps = (state) => ({
  explorer: getExplorerState(state),
  outerHeight: state.get('explorer').get('outerHeight'),
  innerHeight: state.get('explorer').get('innerHeight'),
  breakeven: getBreakeven(state),
});

export default connect(
  MapStateToProps,
  {
    changeExplorerPriceFilter,
    fetchExplorer,
    resetExplorer,
    changeSearch,
    checkBreakeven,
  },
)(toJS(withRouter(TicketExplorer)));
