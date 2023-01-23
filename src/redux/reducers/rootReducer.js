import { combineReducers } from 'redux-immutable';
import explorerReducer from './explorerReducer';
import statesReducer from './statesReducer';
import authReducer from './authReducer';
import recommendsReducer from './recommendsReducer';

// Composes all reducers
export default combineReducers({
	explorer: explorerReducer,
	states: statesReducer,
	auth: authReducer,
	recommends: recommendsReducer,
});
