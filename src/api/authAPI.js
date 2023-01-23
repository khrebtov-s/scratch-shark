/* eslint-disable no-unused-vars */
import axios from 'axios';
import { API_URL as baseURL } from '../env';
import { authHeader } from '../utils/authHeader';

export const loginUserAPI = ({ login, password }) => {
	const email = login;
	return axios.post(`${baseURL}security/token/create`, {
		email,
		password,
	});
};

export const registerUserAPI = ({
	username,
	email,
	password,
	lastName,
	firstName,
	dateOfBirth,
}) => {
	return axios({
		method: 'post',
		url: `${baseURL}security/registration/register`,
		headers: {
			'Content-Type': 'application/json',
		},
		responseType: 'json',
		data: {
			email,
			plainPassword: password,
			username,
			firstName,
			lastName,
			dateOfBirth,
		},
	});
};

export const profileEditAPI = ({
	username,
	email,
	newPassword,
	lastName,
	firstName,
	password,
}) => {
	return axios({
		method: 'post',
		url: `${baseURL}security/profile/update`,
		headers: {
			Accept: 'application/json',
			Authorization: authHeader(),
		},
		data: {
			firstName,
			lastName,
			username,
			plainPassword: newPassword,
			password,
			email,
		},
	});
};

export const avatarEditAPI = (formData) => {
	return axios({
		method: 'post',
		url: `${baseURL}security/profile/update/avatar`,
		headers: {
			'Content-Type': 'multipart/form-data',
			Accept: 'application/json',
			Authorization: authHeader(),
		},
		data: formData,
	});
};

export const checkTokenAPI = (token) => {
	const tokenToCheck = token ? `Bearer ${token}` : authHeader();
	return axios({
		method: 'post',
		url: `${baseURL}security/token/check`,
		headers: {
			Accept: 'application/json',
			Authorization: tokenToCheck,
		},
	});
};

export const passwordResetAPI = ({ email }) => {
	return axios({
		method: 'post',
		url: `${baseURL}security/password_reset`,
		headers: {
			Accept: 'application/json',
		},
		data: {
			email,
		},
	});
};
