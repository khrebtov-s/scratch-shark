import { fromJS } from 'immutable';
import {
	FETCH_STATES,
	FETCH_STATES_FAILED,
	FETCH_STATES_SUCCESSED,
	FETCH_STATES_COMPLETED,
	SET_STATE,
} from '../actions/types';
import { loadState } from '../../utils/localStorage';

const initialState = fromJS({
	items: fromJS([]),
	currentState: loadState() || { name: 'Rhode Island', id: 92, active: true },
	isFetching: true,
	error: false,
	hasMore: true,
});

const statesReducer = function (state = initialState, action) {
	switch (action.type) {
	case FETCH_STATES: {
		return state.set('isFetching', true);
	}

	case FETCH_STATES_SUCCESSED: {
		return state.set(
			'items',
			state.get('items').merge(fromJS(action.payload)),
		);
	}

	case FETCH_STATES_COMPLETED: {
		return state.set('isFetching', false).set('hasMore', false);
	}

	case FETCH_STATES_FAILED: {
		return state
			.set('error', action.payload)
			.set('isFetching', false)
			.set('hasMore', false);
	}

	case SET_STATE: {
		return state.set('currentState', action.payload);
	}

	default:
		return state;
	}
};

export default statesReducer;

export const getStatesState = (state) => state.get('states');
export const getCurrentState = (state) =>
	state.getIn(['states', 'currentState']);
