import { put, takeLatest, call } from 'redux-saga/effects';
import { FETCH_STATES } from '../actions/types';
import { fetchStates } from '../../api/stateAPI';
import {
	fetchStatesSuccessed,
	fetchStatesFailed,
	fetchStatesCompleted,
} from '../actions/statesActions';

export function* fetchStatesSaga({ payload }) {
	try {
		// Iteration fetches every state
		const { page } = payload;
		const response = yield call(fetchStates, page);
		const { data, status } = response;
		const { total_page: totalPages, page: currentPage } = data.response;

		if (status >= 200 && status < 300) {
			yield put(fetchStatesSuccessed(data.response.state));
			if (totalPages === currentPage) {
				yield put(fetchStatesCompleted());
			}
		} else {
			throw response;
		}
	} catch (e) {
		yield put(fetchStatesFailed(getErrorMessage(e)));
		console.error(e);
	}
}

export function* watchFetchStates() {
	yield takeLatest(FETCH_STATES, fetchStatesSaga);
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
