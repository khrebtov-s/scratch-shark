import axios from 'axios';
import { authHeader } from '../utils/authHeader';
import { API_URL as baseURL } from '../env';

export const fetchExplorer = (page = 1, filter = 5, search = '') => {
	const fetchQuery = !search
		? `lotteries?amount=${filter}&amountComparator=e&page=${page}`
		: `lotteries?query=${search}&page=${page}`;
	return axios(`${baseURL}${fetchQuery}`, {
		headers: { Accept: 'application/json', Authorization: authHeader() },
	});
};

export const fetchRecommends = (page = 1, price = 5, preset = 'jackpot', breakeven = true) => {
	const presetQuery = preset === 'jackpot'
		? 'sortParameter=jackpotOdds'
		: preset === 'bestValue'
			? 'sortParameter=bestValue'
			: preset === 'anyPrize'
				? 'sortParameter=anyPrizeOdds'
				: '';
	const comparator = preset === 'anyPrize' ? 'e' : 'lte';
	const breakevenPrizes = breakeven ? 'include' : 'exclude';
	return axios(
		`${baseURL}lotteries?page=${page}&${presetQuery}&amount=${price}&amountComparator=${comparator}&breakevenPrizes=${breakevenPrizes}`,
		{
		  headers: { Accept: 'application/json', Authorization: authHeader() },
		},
	);
};


export const fetchLottery = (id) => {
	return fetch(`${baseURL}lotteries/${id}`, {
		headers: { Accept: 'application/json', Authorization: authHeader() },
	})
		.then((res) => {
			if (res.status >= 200 && res.status < 300) {
				return Promise.resolve(res.json());
			} else {
				return Promise.reject(new Error(res.statusText || res.status));
			}
		})
		.catch((e) => {
			throw new Error(e);
		});
};

export const fetchLotteries = (page = 1, price = 5, preset) => {
	const presetQuery =
    preset === 'jackpot'
    	? 'order%5BjackpotOdds%5D=DESC&'
    	: preset === 'bestValue'
    		? 'order%5BbestValue%5D=DESC&'
    		: preset === 'anyPrize'
    			? 'order%5BbestOdds%5D=DESC&'
    			: '';

	return axios.get(
		`${baseURL}lotteries?page=${page}&${presetQuery}ticketPrice.amount%5Blte%5D=${price}`,
		{
		  headers: { Accept: 'application/json', Authorization: authHeader() },
		},
	);
};
