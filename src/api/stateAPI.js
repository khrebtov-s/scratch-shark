import axios from 'axios';
import { API_URL as baseURL } from '../env';
import { authHeader } from '../utils/authHeader';

export const fetchStates = (page = 1) => {
	return axios(`${baseURL}states?limit=100&page=${page}`, {
		headers: { Accept: 'application/json', Authorization: authHeader() },
	});
};
