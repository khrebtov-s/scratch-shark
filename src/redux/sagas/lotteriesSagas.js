import { put, takeLatest, call, fork } from 'redux-saga/effects';
import { FETCH_EXPLORER, FETCH_RECOMMENDS } from '../actions/types';
import { fetchExplorer, fetchRecommends } from '../../api/lotteriesAPI';
import {
	fetchExplorerSuccessed,
	fetchExplorerFailed,
	fetchExplorerCompleted,
	fetchRecommendsCompleted,
	fetchRecommendsFailed,
	fetchRecommendsSuccessed,
} from '../actions/lotteriesActions';
import { logoutAction } from '../actions/authActions';

export function* fetchExplorerSaga({ payload }) {
	try {
		const { page, filter, search } = payload;

		const response = yield call(fetchExplorer, page, filter, search);

		const { status, data } = response;

		if (status >= 200 && status < 300) {
			if (data.response.lottery) {
				if (data.response.lottery.length === 0) {
					yield put(fetchExplorerCompleted());
				} else {
					yield put(fetchExplorerSuccessed(data.response.lottery));
				}
			}
			if (data.response.page >= data.response.total_page) {
				yield put(fetchExplorerCompleted());
			}
		} else {
			if (status === 401) {
				yield put(logoutAction());
			}
			throw response;
		}
	} catch (e) {
		yield put(fetchExplorerFailed(getErrorMessage(e)));
		const errObj = JSON.parse(JSON.stringify(e));
		if (errObj.response.status === 401) {
			yield put(logoutAction());
		}
		console.error(e);
	}
}

export function* fetchRecommendsSaga({ payload }) {
	try {
		const { page, preset, price, breakeven } = payload;
		const response = yield call(fetchRecommends, page, price, preset, breakeven);
		const { data, status } = response;
		// ATTENTION

		if (status >= 200 && status < 300) {
			if (data.response.lottery) {
				if (data.response.lottery.length === 0) {
					yield put(fetchRecommendsCompleted());
				} else {
					yield put(fetchRecommendsSuccessed(data.response.lottery));
				}
			}
			if (data.response.total_page === data.response.page) {
				yield put(fetchRecommendsCompleted());
			}
		} else {
			if (status === 401) {
				yield put(logoutAction());
			}
			throw response;
		}
	} catch (e) {
		yield put(fetchRecommendsFailed(getErrorMessage(e)));
		const errObj = JSON.parse(JSON.stringify(e));
		if (errObj.response.status === 401) {
			yield put(logoutAction());
		}
		console.error(e);
	}
}

export function* watchFetchLotteries() {
	yield takeLatest(FETCH_EXPLORER, fetchExplorerSaga);
}

export function* watchFetchRecommended() {
	yield takeLatest(FETCH_RECOMMENDS, fetchRecommendsSaga);
}

export function* watchLotteries() {
	yield fork(watchFetchLotteries);
	yield fork(watchFetchRecommended);
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
