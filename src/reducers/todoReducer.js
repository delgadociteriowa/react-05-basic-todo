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
} from '../actions/types';

const initialState = {
  todos: [],
  loading: true,
  editMode: false,
  todoToEdit: {
    id: null,
    title: '',
    completed: false
  },
  filtered:[],
  error: false,
  errorStr:''
};

const TodoReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false
      }
    case GET_TODOS_ERROR:
      return {
        ...state,
        error: true,
        errorStr: action.payload
      }
    case COMPLETE_TODO:
      const changedTodo = action.payload;
      return {
        ...state,
        todos: [...state.todos.map(todo => {
          if(todo.id === changedTodo.id) {
            todo = {...changedTodo};
          }
          return todo
        })],
        loading: false
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false
      }
    case ACTIVATE_EDIT_MODE:
      return {
        ...state,
        editMode: true,
        todoToEdit: action.payload
      }
    case DEACTIVATE_EDIT_MODE:
      return {
        ...state,
        editMode: false,
        todoToEdit: null
      }
    case EDIT_TODO:
      const editedTodo = action.payload;
      return {
        ...state,
        todos:[...state.todos.map(todo => {
            if(todo.id === editedTodo.id){
              todo = {...editedTodo};
            }
            return todo;
          }
        )],
        loading:false
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
        loading: false
      }
    case SEARCH_TODO:
      const toSearch = action.payload;
      return{
        ...state,
        filtered: [...state.todos.filter(todo => {
          const regex = new RegExp(`${toSearch}`, 'gi');
          return todo.title.match(regex)
        })]
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

export default TodoReducer