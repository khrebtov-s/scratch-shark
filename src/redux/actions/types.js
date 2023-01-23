// Lotteries types
const lotNS = '[EXPLORER] ';
export const FETCH_EXPLORER = lotNS + 'FETCH_EXPLORER';
export const FETCH_EXPLORER_SUCCESSED = lotNS + 'FETCH_EXPLORER_SUCCESSED';
export const FETCH_EXPLORER_FAILED = lotNS + 'FETCH_EXPLORER_FAILED';
export const FETCH_EXPLORER_COMPLETED = lotNS + 'FETCH_EXPLORER_COMPLETED';
export const CHANGE_EXPLORER_PRICE_FILTER =
  lotNS + 'CHANGE_EXPLORER_PRICE_FILTER';
export const RESET_EXPLORER = lotNS + 'RESET_EXPLORER';
export const SET_EXPLORER_CURRENT_PAGE = lotNS + 'SET_EXPLORER_CURRENT_PAGE';
export const CHANGE_SEARCH = lotNS + 'CHANGE_SEARCH';

// Recommended types
const recNS = '[RECOMMENDS] ';
export const CHANGE_RECOMMENDS_PRICE_FILTER =
  recNS + 'CHANGE_RECOMMENDS_PRICE_FILTER';
export const FETCH_RECOMMENDS = recNS + 'FETCH_RECOMMENDS';
export const FETCH_RECOMMENDS_FAILED = recNS + 'FETCH_RECOMMENDS_FAILED';
export const FETCH_RECOMMENDS_SUCCESSED = recNS + 'FETCH_RECOMMENDS_SUCCESSED';
export const FETCH_RECOMMENDS_COMPLETED = recNS + 'FETCH_RECOMMENDS_COMPLETED';
export const CHANGE_PRESET = recNS + 'CHANGE_PRESET';
export const SET_SLIDE = recNS + 'SET_SLIDE';
export const CHECK_BREAKEVEN = recNS + 'CHECK_BREAKEVEN';
export const FETCH_LOTTERIES = recNS + 'FETCH LOTTERIES';
export const CHANGE_TYPE_HINT = recNS + 'CHANGE_TYPE_HINT';

// States types
const statesNS = '[STATES] ';
export const FETCH_STATES = statesNS + 'FETCH_STATES';
export const FETCH_STATES_SUCCESSED = statesNS + 'FETCH_STATES_SUCCESSED';
export const FETCH_STATES_FAILED = statesNS + 'FETCH_STATES_FAILED';
export const FETCH_STATES_COMPLETED = statesNS + 'FETCH_STATES_COMPLETED';
export const RESET_RECOMMENDS = statesNS + 'RESET_RECOMMENDS';
export const SET_STATE = statesNS + 'SET_STATE';
export const SET_RECOMMENDS_PAGE = statesNS + 'SET_RECOMMENDS_PAGE';


// Auth types
const authNS = '[AUTH] ';
export const SET_VISIT = authNS + 'SET_VISIT';
export const SET_USER = authNS + 'SET_USER';
export const LOGOUT = authNS + 'LOGOUT';
export const LOGIN = authNS + 'LOGIN';
export const REFRESH_TOKEN = authNS + 'REFRESH_TOKEN';
export const CHECK_TOKEN = authNS + 'CHECK_TOKEN';
export const VISITED = authNS + 'VISITED';
export const REFRESH_VISIT = authNS + 'REFRESH_VISIT';
export const LOGIN_FAILED = authNS + 'LOGIN_FAILED';
export const LOGIN_SUCCESSED = authNS + 'LOGIN_SUCCESSED';
export const LOGOUT_FAILED = authNS + 'LOGOUT_FAILED';
export const LOGOUT_SUCCESSED = authNS + 'LOGOUT_SUCCESSED';
export const REGISTER = authNS + 'REGISTER';
export const REGISTER_FAILED = authNS + 'REGISTER_FAILED';
export const REGISTER_SUCCESSED = authNS + 'REGISTER_SUCCESSED';
export const REFRESH_AUTH_PAGES = authNS + 'REFRESH_AUTH_PAGES';
export const PROFILE_EDIT = authNS + 'PROFILE_EDIT';
export const PROFILE_EDIT_SUCCESSED = authNS + 'PROFILE_EDIT_SUCCESSED';
export const PROFILE_EDIT_FAILED = authNS + 'PROFILE_EDIT_FAILED';
export const PROFILE_EDIT_REFRESH = authNS + 'PROFILE_EDIT_REFRESH';
export const REGISTER_REFRESH = authNS + 'REGISTER_REFRESH';
export const LOGIN_REFRESH = authNS + 'LOGIN_REFRESH';
export const LOGOUT_REFRESH = authNS + 'LOGOUT_REFRESH';
export const COMPLETE_GUIDE = authNS + 'COMPLETE_GUIDE';
