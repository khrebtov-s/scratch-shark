import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { fetchStates, setState } from '../../../../redux/actions/statesActions';
import { getStatesState } from '../../../../redux/reducers/statesReducer';
import { toJS } from '../../../../utils/toJS';

const SelectState = (props) => {
  const { fetchStates, states, setState, history, handler } = props;
  const [search, setSearch] = useState('');
  const { items, currentState } = states;

  useEffect(() => {
    if (items.length === 0) {
      fetchStates(1);
    }
  }, []);

  return (
    <div className="check-list">
      <div className="check-list-head">State</div>
      <ul
        className="check-list"
        style={{
          top: '50px',
          left: '0px',
          borderRadius: '0',
        }}
      >
        <li
          onClick={() => {
            history.push('/best');
            handler();
          }}
          className="checkmark"
          style={{
            cursor: 'pointer',
            color: 'black',
          }}
        >
          Rhode Island
        </li>
      </ul>
    </div>
  );
};

SelectState.propTypes = {
  states: PropTypes.shape({
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    hasMore: PropTypes.bool.isRequired,
    currentState: PropTypes.object,
  }),
  fetchStates: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

SelectState.defaultProps = {
  states: {
    currentState: {},
  },
};

const mapStateToProps = (state) => ({
  states: getStatesState(state),
});

export default connect(
  mapStateToProps,
  { fetchStates, setState },
)(toJS(withRouter(SelectState)));
