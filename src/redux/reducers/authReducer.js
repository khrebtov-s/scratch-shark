import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import {
	LOGIN,
	LOGOUT,
	LOGIN_FAILED,
	LOGOUT_FAILED,
	LOGIN_REFRESH,
	LOGOUT_REFRESH,
	LOGIN_SUCCESSED,

	REGISTER,
	REGISTER_FAILED,
	REGISTER_SUCCESSED,
	REGISTER_REFRESH,

	PROFILE_EDIT,
	PROFILE_EDIT_FAILED,
	PROFILE_EDIT_SUCCESSED,
	PROFILE_EDIT_REFRESH,

	SET_USER,
	SET_VISIT,

	COMPLETE_GUIDE,
} from '../actions/types';
import { loadUser, loadGuide } from '../../utils/localStorage';
import { loadVisit } from '../../utils/sessionStorage';
import createReducer from '../../utils/createReducer';

const user = loadUser();
const userState = user || fromJS({});

// States
const loginState = fromJS({
	errors: false,
	loading: false,
});

const logoutState = fromJS({
	errors: false,
	loading: false,
});

const profileState = fromJS({
	errors: false,
	loading: false,
});

const registerState = fromJS({
	loading: false,
	errors: false,
	registered: false,
});

const guideState = loadGuide() || false;

const visitState = loadVisit() || false;


// Reducers
const setVisit = (state, action) => action.payload;

const completeGuide = () => true;

const setUser = (state, { payload }) => {
	return payload;
};

const login = (state) => {
	return state.set('loading', true).set('errors', false);
};

const loginFailed = (state, action) => {
	return state.set('errors', action.payload).set('loading', false);
};

const loginSuccess = (state) =>
	state.set('loading', false).set('errors', false);

const loginRefresh = (state) =>
	state.set('loading', false).set('errors', false);

const logout = (state) => {
	return state.set('loading', 'true');
};

const logoutFailed = (state, action) => {
	return state.set('errors', action.payload).set('loading', false);
};

const logoutRefresh = (state) => {
	return state
		.set('user', false)
		.set('loading', false)
		.set('token', '');
};

const profileEdit = (state) => state.set('loading', true).set('errors', false);

const profileEditFailed = (state, { payload }) =>
	state.set('loading', false).set('errors', payload);

const profileEditSuccessed = (state) =>
	state.set('loading', false).set('errors', 'Successfully edited!');

const profileEditRefresh = (state) =>
	state.set('loading', false).set('errors', false);

const register = (state) => state.set('loading', true).set('errors', false);

const registerFailed = (state, { payload }) =>
	state.set('loading', false).set('errors', payload);

const registerSuccessed = (state) =>
	state
		.set('loading', false)
		.set('errors', 'Successfully registered!')
		.set('registered', true);

const registerRefresh = (state) =>
	state
		.set('loading', false)
		.set('errors', false)
		.set('registered', false);


const guideReducer = createReducer(guideState, {
	[COMPLETE_GUIDE]: completeGuide,
});


const visitReducer = createReducer(visitState, {
	[SET_VISIT]: setVisit,
});

const userReducer = createReducer(userState, {
	[SET_USER]: setUser,
});

const loginReducer = createReducer(loginState, {
	[LOGIN]: login,
	[LOGIN_FAILED]: loginFailed,
	[LOGIN_REFRESH]: loginRefresh,
	[LOGIN_SUCCESSED]: loginSuccess,
});

const logoutReducer = createReducer(logoutState, {
	[LOGOUT]: logout,
	[LOGOUT_FAILED]: logoutFailed,
	[LOGOUT_REFRESH]: logoutRefresh,
});

const profileReducer = createReducer(profileState, {
	[PROFILE_EDIT]: profileEdit,
	[PROFILE_EDIT_FAILED]: profileEditFailed,
	[PROFILE_EDIT_SUCCESSED]: profileEditSuccessed,
	[PROFILE_EDIT_REFRESH]: profileEditRefresh,
});

const registerReducer = createReducer(registerState, {
	[REGISTER]: register,
	[REGISTER_FAILED]: registerFailed,
	[REGISTER_SUCCESSED]: registerSuccessed,
	[REGISTER_REFRESH]: registerRefresh,
});

export default combineReducers({
	user: userReducer,
	login: loginReducer,
	logout: logoutReducer,
	visited: visitReducer,
	profile: profileReducer,
	register: registerReducer,
	guide: guideReducer,
});


// Selectors
export const getUser = (state) => state.getIn(['auth', 'user']);
export const getToken = (state) => state.getIn(['auth', 'token']);
export const getAuthErrors = (state) => state.getIn(['auth', 'errors']);
export const getAuthLoading = (state) => state.getIn(['auth', 'loading']);
export const getVisited = (state) => state.getIn(['auth', 'visited']);
export const getLoggedIn = (state) => state.getIn(['auth', 'loggedIn']);
export const getRegistered = (state) => state.getIn(['auth', 'registered']);
export const getAuthState = (state) => state.get('auth');
export const getLoginState = (state) => state.getIn(['auth', 'login']);
export const getRegisterState = (state) => state.getIn(['auth', 'register']);
export const getGuideState = (state) => state.getIn(['auth', 'guide']);
