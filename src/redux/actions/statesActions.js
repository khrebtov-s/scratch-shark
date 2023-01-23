import {
	FETCH_STATES,
	FETCH_STATES_SUCCESSED,
	FETCH_STATES_FAILED,
	FETCH_STATES_COMPLETED,
	SET_STATE,
} from './types';

export const fetchStates = (page = 1) => {
	return {
		type: FETCH_STATES,
		payload: page,
	};
};

export const fetchStatesSuccessed = (states) => {
	return {
		type: FETCH_STATES_SUCCESSED,
		payload: states,
	};
};

export const fetchStatesFailed = (error) => {
	return {
		type: FETCH_STATES_FAILED,
		payload: error,
	};
};

export const fetchStatesCompleted = () => {
	return {
		type: FETCH_STATES_COMPLETED,
	};
};

export const setState = (state) => {
	return {
		type: SET_STATE,
		payload: state,
	};
};
