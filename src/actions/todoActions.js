import {
  GET_TODOS,
  GET_TODOS_ERROR,
  COMPLETE_TODO,
  SET_LOADING,
  ADD_TODO,
  ACTIVATE_EDIT_MODE,
  DEACTIVATE_EDIT_MODE,
  EDIT_TODO,
  DELETE_TODO,
  SEARCH_TODO
} from './types';

// Get All Todos
export const getTodos = () => async dispatch => {
  try {
    const res = await fetch('http://localhost:5000/todos');
    const data = await res.json()
    dispatch({ type: GET_TODOS, payload: data});  
  } catch (error) {
    dispatch({ type: GET_TODOS_ERROR, payload: error.message});  
  }
};

// Get single todo - ojo cambiar cualquier cosa
export const getSingleTodo = async (id) => {
  const res = await fetch(`http://localhost:5000/todos/${id}`);
  const data = await res.json()
  return data 
}

// Complete Todo
export const completeTodo = (id) => async dispatch => {
  setLoading();
  const dbTodo = await getSingleTodo(id);
  dbTodo.completed = !dbTodo.completed;
  const res = await fetch(`http://localhost:5000/todos/${id}`, {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(dbTodo)
  });
  const data = await res.json();
  dispatch({ type: COMPLETE_TODO, payload: data});
}

// Add Todo
export const addTodo = (title) => async dispatch => {
  setLoading();
  const res = await fetch('http://localhost:5000/todos', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({title, completed:false})
  });
  const data = await res.json();
  dispatch({ type: ADD_TODO, payload: data});
}

// Activate Edit Mode
export const activateEditMode = todo => dispatch => {
  dispatch({ type: ACTIVATE_EDIT_MODE, payload: todo});
}

// Deactivate Edit Mode
export const deactivateEditMode = () => dispatch => {
  dispatch({ type: DEACTIVATE_EDIT_MODE });
}

// Edit Todo
export const editTodo = (id, title) => async dispatch => {
  setLoading();
  const dbTodo = await getSingleTodo(id);
  dbTodo.title = title;
  const res = await fetch(`http://localhost:5000/todos/${id}`, {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(dbTodo)
  });
  const data = await res.json();
  dispatch({ type: EDIT_TODO, payload: data});
}

// Delete a todo
export const deleteTodo = (id) => async dispatch => {
  setLoading();
  await fetch(`http://localhost:5000/todos/${id}`, {method: 'DELETE'});
  dispatch({ type: DELETE_TODO, payload: id});
}

// Search Todo
export const searchTodo = title => dispatch => {
  dispatch({ type: SEARCH_TODO, payload: title});
}

export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}