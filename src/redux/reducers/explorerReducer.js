import { fromJS } from 'immutable';
import {
	FETCH_EXPLORER,
	FETCH_EXPLORER_FAILED,
	FETCH_EXPLORER_SUCCESSED,
	FETCH_EXPLORER_COMPLETED,
	RESET_EXPLORER,
	SET_EXPLORER_CURRENT_PAGE,
	CHANGE_EXPLORER_PRICE_FILTER,
	CHANGE_SEARCH,
} from '../actions/types';
import createReducer from '../../utils/createReducer';

const explorerState = fromJS({
	lotteries: fromJS([]),
	filter: 5,
	page: 1,
	isFetching: true,
	hasMore: true,
	error: false,
	search: '',
	outerHeight: window.outerHeight,
	innerHeight: window.innerHeight,
});

const fetchExplorer = (state) => {
	return state.set('isFetching', true);
};

const fetchExplorerSuccessed = (state, action) => {
	return state
		.set('lotteries', state.get('lotteries').merge(fromJS(action.payload)))
		.set('page', state.get('page') + 1)
		.set('hasMore', true);
};

const fetchExplorerCompleted = (state) => {
	return state.set('isFetching', false).set('hasMore', false);
};

const fetchExplorerFailed = (state, action) => {
	return state
		.set('error', action.payload)
		.set('isFetching', false)
		.set('hasMore', false);
};

const setExplorerCurrentPage = (state, action) => {
	return state.set('page', action.payload);
};

const resetExplorer = (state) => {
	return state
		.set('lotteries', fromJS([]))
		.set('page', 1)
		.set('isFetching', true)
		.set('hasMore', true);
};

const changeSearch = (state, action) => {
	return state.set('search', action.payload);
};

const changeExplorerPriceFilter = (state, action) => {
	return state.set('filter', action.payload);
};

export default createReducer(explorerState, {
	[FETCH_EXPLORER]: fetchExplorer,
	[FETCH_EXPLORER_COMPLETED]: fetchExplorerCompleted,
	[FETCH_EXPLORER_FAILED]: fetchExplorerFailed,
	[FETCH_EXPLORER_SUCCESSED]: fetchExplorerSuccessed,
	[CHANGE_SEARCH]: changeSearch,
	[CHANGE_EXPLORER_PRICE_FILTER]: changeExplorerPriceFilter,
	[RESET_EXPLORER]: resetExplorer,
	[SET_EXPLORER_CURRENT_PAGE]: setExplorerCurrentPage,
});

export const getExplorerState = (state) => state.get('explorer');
export const getExplorerLots = (state) =>
	state.getIn(['explorer', 'lotteries']);
