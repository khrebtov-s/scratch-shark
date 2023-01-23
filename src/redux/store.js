import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // Dev
import createSagaMiddleware from 'redux-saga';
import { saveUser, saveState, saveGuide } from '../utils/localStorage';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

store.subscribe(() => {
	saveUser(store.getState().get('auth'));
});

store.subscribe(() => {
	saveState(
		store
			.getState()
			.get('states')
			.get('currentState'),
	);
});

store.subscribe(() => {
	saveGuide(
		store
			.getState()
			.get('auth')
			.get('guide'),
	);
});

sagaMiddleware.run(rootSaga);

export default store;
