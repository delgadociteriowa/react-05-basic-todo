import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { getTodos } from '../../actions/todoActions';
import { setAlert } from '../../actions/alertActions';

const Todos = ({ todos, loading, filtered, error, errorStr, fetchError, getTodos, setAlert}) => {
  
  useEffect(() => {
    getTodos();
   // eslint-disable-next-line
  },[]);

  if(todos !== null && todos.length === 0 && !loading) {
    return <h4>There are no todos.</h4>
  }

  if (error) {
    setAlert(errorStr);
  };

  if(filtered.length === 0){
    return (
      <ul className="list-group">
        {todos !== null && !loading ?
          (todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))) : (
            <li className="list-group-item"  style={fetchError ? {display: 'none'} : {display: 'block'} }>Loading ...</li>
          )
        }
      </ul>
    )
  } else {
    return (
      <ul className="list-group">
        {filtered !== null && !loading ?
          (filtered.map(oneFiltered => (
            <TodoItem key={oneFiltered.id} todo={oneFiltered} />
          ))) : (
            <li className="list-group-item"  style={fetchError ? {display: 'none'} : {display: 'block'} }>Loading ...</li>
          )
        }
      </ul>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  filtered: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todo.todos,
  loading: state.todo.loading,
  filtered: state.todo.filtered,
  error: state.todo.error,
  errorStr: state.todo.errorStr,
  fetchError: state.alert.fetchError,
})

export default connect(mapStateToProps, { getTodos, setAlert })(Todos)