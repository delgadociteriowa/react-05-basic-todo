import {
  SET_ALERT,
  REMOVE_ALERT
} from './types';

// Set Alert
export const setAlert = (msg, timeout = 10000) => dispatch => {
  console.log('desde las acciones');
  dispatch({ type: SET_ALERT, payload: msg});
  setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
}