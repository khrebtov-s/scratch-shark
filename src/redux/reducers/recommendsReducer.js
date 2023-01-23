import { fromJS } from 'immutable';
import {
	CHANGE_PRESET,
	CHANGE_RECOMMENDS_PRICE_FILTER,
	FETCH_RECOMMENDS,
	FETCH_RECOMMENDS_FAILED,
	FETCH_RECOMMENDS_SUCCESSED,
	FETCH_RECOMMENDS_COMPLETED,
	RESET_RECOMMENDS,
	SET_SLIDE,
	SET_RECOMMENDS_PAGE,
	CHECK_BREAKEVEN,
} from '../actions/types';
import createReducer from '../../utils/createReducer';

const initialState = fromJS({
	lotteries: fromJS([]),
	preset: '',
	filter: '',
	isFetching: true,
	error: false,
	hasMore: true,
	slide: 0,
	page: 1,
	breakeven: true,
});

const changePriceFilter = (state, action) => {
	return state.set('filter', action.payload);
};

const changePreset = (state, action) => {
	return state.set('preset', action.payload);
};
const fetchRecommends = (state) => {
	return state.set('isFetching', true);
};

const fetchRecommendsFailed = (state, action) => {
	return state
		.set('isFetching', false)
		.set('hasMore', false)
		.set('error', action.payload);
};

const fetchRecommendsSuccessed = (state, action) => {
	return state
		.set('lotteries', fromJS(action.payload))
		.set('hasMore', true)
		.set('isFetching', false);
};

const fetchRecommendsCompleted = (state) => {
	return state
		.set('isFetching', false)
		.set('error', false)
		.set('hasMore', false);
};

const resetRecommends = (state, action) => {
	return state
		.set('lotteries', action.payload)
		.set('slide', 0)
		.set('page', 1);
};

const setRecommendsPage = (state, action) => {
	return state.set('page', action.payload);
};

const setSlide = (state, action) => {
	return state.set('slide', action.payload);
};

const checkBreakeven = (state, action) => {
	return state.set('breakeven', action.payload);
};

export default createReducer(initialState, {
	[CHANGE_RECOMMENDS_PRICE_FILTER]: changePriceFilter,
	[CHANGE_PRESET]: changePreset,
	[FETCH_RECOMMENDS]: fetchRecommends,
	[FETCH_RECOMMENDS_COMPLETED]: fetchRecommendsCompleted,
	[FETCH_RECOMMENDS_SUCCESSED]: fetchRecommendsSuccessed,
	[FETCH_RECOMMENDS_FAILED]: fetchRecommendsFailed,
	[RESET_RECOMMENDS]: resetRecommends,
	[SET_SLIDE]: setSlide,
	[SET_RECOMMENDS_PAGE]: setRecommendsPage,
	[CHECK_BREAKEVEN]: checkBreakeven,
});

export const getRecommendsFilter = (state) =>
	state.getIn(['recommends', 'filter']);
export const getRecommendsPreset = (state) =>
	state.getIn(['recommends', 'preset']);
export const getRecommendsState = (state) => state.get('recommends');
export const getRecommendsLots = (state) =>
	state.getIn(['recommends', 'lotteries']);
export const getBreakeven = (state) => state.getIn(['recommends', 'breakeven']);
