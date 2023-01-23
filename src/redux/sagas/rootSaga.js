import { all } from 'redux-saga/effects';

import { watchLotteries } from './lotteriesSagas';

import { watchFetchStates } from './statesSaga';

import { watchAuth } from './authSaga';

// Composes all sagas
export default function* rootSaga() {
	yield all([watchAuth(), watchLotteries(), watchFetchStates()]);
}
