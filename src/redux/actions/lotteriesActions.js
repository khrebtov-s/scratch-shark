import {
	FETCH_EXPLORER,
	FETCH_EXPLORER_FAILED,
	FETCH_EXPLORER_SUCCESSED,
	FETCH_EXPLORER_COMPLETED,
	CHANGE_EXPLORER_PRICE_FILTER,
	RESET_EXPLORER,
	CHANGE_PRESET,
	CHANGE_TYPE_HINT,
	CHANGE_RECOMMENDS_PRICE_FILTER,
	FETCH_RECOMMENDS,
	FETCH_RECOMMENDS_FAILED,
	FETCH_RECOMMENDS_COMPLETED,
	FETCH_RECOMMENDS_SUCCESSED,
	RESET_RECOMMENDS,
	SET_SLIDE,
	SET_RECOMMENDS_PAGE,
	CHANGE_SEARCH,
	CHECK_BREAKEVEN,
	FETCH_LOTTERIES,
} from './types';

export const fetchExplorer = (page = 1, filter = 5, search = '') => {
	return {
		type: FETCH_EXPLORER,
		payload: {
			page,
			filter,
			search,
		},
	};
};

export const fetchLotteries = (
	page = 1,
	price = 5,
	preset = 'jackpot',
	breakeven = true,
) => {
	return {
		type: FETCH_LOTTERIES,
		payload: { page, price, preset, breakeven },
	};
};

export const fetchRecommends = (
	page = 1,
	price = 5,
	preset = 'jackpot',
	breakeven = true,
) => {
	return {
		type: FETCH_RECOMMENDS,
		payload: { page, price, preset, breakeven },
	};
};

export const fetchExplorerSuccessed = (lotteries) => {
	return {
		type: FETCH_EXPLORER_SUCCESSED,
		payload: lotteries,
	};
};

export const fetchExplorerFailed = (error) => {
	return {
		type: FETCH_EXPLORER_FAILED,
		payload: error,
	};
};

export const changeSearch = (query) => {
	return {
		type: CHANGE_SEARCH,
		payload: query,
	};
};

export const fetchRecommendsSuccessed = (tickets) => {
	return {
		type: FETCH_RECOMMENDS_SUCCESSED,
		payload: tickets,
	};
};

export const fetchRecommendsFailed = (error) => {
	return {
		type: FETCH_RECOMMENDS_FAILED,
		payload: error,
	};
};

export const checkBreakeven = (breakeven) => {
	return {
		type: CHECK_BREAKEVEN,
		payload: breakeven,
	};
};

export const fetchRecommendsCompleted = () => {
	return {
		type: FETCH_RECOMMENDS_COMPLETED,
	};
};
export const fetchExplorerCompleted = () => {
	return {
		type: FETCH_EXPLORER_COMPLETED,
	};
};

export const changeExplorerPriceFilter = (price) => {
	return {
		type: CHANGE_EXPLORER_PRICE_FILTER,
		payload: price,
	};
};

export const resetExplorer = () => {
	return {
		type: RESET_EXPLORER,
	};
};

export const changePreset = (preset) => {
	return {
		type: CHANGE_PRESET,
		payload: preset,
	};
};

export const changeRecommendsFilter = (price) => {
	return {
		type: CHANGE_RECOMMENDS_PRICE_FILTER,
		payload: price,
	};
};

export const resetRecommended = () => {
	return {
		type: RESET_RECOMMENDS,
	};
};

export const setSlide = (slide) => {
	return {
		type: SET_SLIDE,
		payload: slide,
	};
};

export const setRecommendedPage = (page) => {
	return {
		type: SET_RECOMMENDS_PAGE,
		payload: page,
	};
};

export const changeRecommendsHint = (typeHint) => {
	return {
		type: CHANGE_TYPE_HINT,
		payload: typeHint,
	};
};
