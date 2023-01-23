import {
	LOGIN,
	LOGOUT,
	REGISTER,
	PROFILE_EDIT,
	SET_VISIT,
	SET_USER,
	LOGIN_REFRESH,
	REGISTER_REFRESH,
	LOGOUT_REFRESH,
	PROFILE_EDIT_REFRESH,
	CHECK_TOKEN,
	COMPLETE_GUIDE,
} from './types';

export const visitPage = () => {
	return {
		type: SET_VISIT,
		payload: true,
	};
};

export const completeGuide = () => {
	return {
		type: COMPLETE_GUIDE,
	};
};

export const setUser = (payload) => {
	return {
		type: SET_USER,
		payload,
	};
};

export const loginAction = (credentials) => {
	return {
		type: LOGIN,
		payload: credentials,
	};
};

export const logoutAction = () => {
	return {
		type: LOGOUT,
	};
};

export const registerAction = (credentials) => {
	return {
		type: REGISTER,
		payload: credentials,
	};
};

export const profileEdit = (user) => {
	return {
		type: PROFILE_EDIT,
		payload: user,
	};
};

export const refreshLogin = () => {
	return {
		type: LOGIN_REFRESH,
	};
};

export const refreshLogout = () => {
	return {
		type: LOGOUT_REFRESH,
	};
};

export const refreshRegister = () => {
	return {
		type: REGISTER_REFRESH,
	};
};

export const refreshProfileEdit = () => {
	return {
		type: PROFILE_EDIT_REFRESH,
	};
};

export const checkToken = (token) => {
	return {
		type: CHECK_TOKEN,
		payload: token,
	};
};
