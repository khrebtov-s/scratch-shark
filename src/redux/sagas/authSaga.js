import { put, takeLatest, call, select, fork } from 'redux-saga/effects';
import {
	LOGIN,
	LOGIN_FAILED,
	LOGIN_SUCCESSED,
	LOGOUT_FAILED,
	LOGOUT,

	REGISTER_SUCCESSED,
	REGISTER_FAILED,
	REGISTER,

	PROFILE_EDIT_FAILED,
	PROFILE_EDIT_SUCCESSED,
	PROFILE_EDIT,

	SET_VISIT,
	SET_USER,
} from '../actions/types';
import { saveVisit } from '../../utils/sessionStorage';
import {
	loginUserAPI,
	registerUserAPI,
	profileEditAPI,
	avatarEditAPI,
} from '../../api/authAPI';

export const getVisit = (state) => state.getIn(['auth', 'visited']);
function delay(ms) {
	return new Promise((resolve) => setTimeout(() => resolve(true), ms));
}

export function* visitPage() {
	const visited = yield select(getVisit);
	yield saveVisit(visited);
}

export function* watchVisitPage() {
	yield takeLatest(SET_VISIT, visitPage);
}

export function* login({ payload }) {
	try {
		const response = yield call(loginUserAPI, payload);
		const { data, status } = response;
		if (status >= 200 && status < 300) {
			const { user, token } = data.response;
			yield put({ type: SET_USER, payload: { ...user, token } });
			yield put({ type: LOGIN_SUCCESSED });
		} else {
			throw response;
		}
	} catch (e) {
		const errorMessage = getErrorMessage(e);
		yield put({ type: LOGIN_FAILED, payload: errorMessage });
	}
}

export function* logout() {
	try {
		yield put({ type: SET_VISIT, payload: false });
		yield put({ type: SET_USER, payload: {} });
	} catch (e) {
		console.error(e);
		yield put({ type: LOGOUT_FAILED, payload: e });
	}
}

export function* register({ payload }) {
	try {
		const response = yield call(registerUserAPI, payload);
		const { status, data } = response;
		if (status >= 200 && status < 300) {
			yield put({ type: REGISTER_SUCCESSED });
			yield call(delay, 2000);
			const { user, token } = data.response;
			yield put({ type: SET_USER, payload: { ...user, token } });
		} else {
			throw response;
		}
	} catch (e) {
		const errorMessage = getErrorMessage(e);
		console.log(errorMessage);
		yield put({ type: REGISTER_FAILED, payload: errorMessage });
	}
}

const getToken = (state) => state.getIn(['auth', 'user', 'token']);

export function* profileEdit({ payload }) {
	try {
		let response;
		if (payload instanceof FormData) {
			response = yield call(avatarEditAPI, payload);
		} else {
			response = yield call(profileEditAPI, payload);
		}
		const { status, data } = response;
		if (status >= 200 && status < 300) {
			const token = yield select(getToken);
			yield put({ type: PROFILE_EDIT_SUCCESSED, payload: data.response.user });
			yield put({ type: SET_USER, payload: { ...data.response.user, token } });
		} else {
			throw response;
		}
	} catch (e) {
		const errorMessage = getErrorMessage(e);
		console.log(errorMessage);
		yield put({ type: PROFILE_EDIT_FAILED, payload: errorMessage });
	}
}

function* watchLogin() {
	yield takeLatest(LOGIN, login);
}

function* watchLogout() {
	yield takeLatest(LOGOUT, logout);
}

function* watchRegister() {
	yield takeLatest(REGISTER, register);
}

function* watchProfileEdit() {
	yield takeLatest(PROFILE_EDIT, profileEdit);
}

export function* watchAuth() {
	yield fork(watchLogin);
	yield fork(watchLogout);
	yield fork(watchRegister);
	yield fork(watchVisitPage);
	yield fork(watchProfileEdit);
}

const getErrorMessage = (e) => {
	if (!e.response) {
		return 'Something went wrong';
	} else {
		console.log(e.response);
		if (!e.response.data.errors) {
			return e.statusText;
		}
		return e.response.data.errors[0].description;
	}
};
