import {
  SET_ALERT,
  REMOVE_ALERT
} from '../actions/types';

const initialState = {
  alertMsg: '',
  fetchError: false
};

const AlertReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ALERT:
      return {
        ...state,
        alertMsg: action.payload,
        fetchError: true
      }
    case REMOVE_ALERT:
      return  {
        ...state,
        alertMsg: ''
      } 
    default:
      return state
  }
};

export default AlertReducer