import { combineReducers } from 'redux';
import  todoReducer  from './todoReducer';
import  alertReducer  from './alertReducer';

export default combineReducers({
  todo: todoReducer,
  alert: alertReducer
});