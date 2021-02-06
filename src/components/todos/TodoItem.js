import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { completeTodo } from '../../actions/todoActions';
import { deleteTodo } from '../../actions/todoActions';
import { activateEditMode } from '../../actions/todoActions';

const TodoItem = ({todo, completeTodo, deleteTodo, activateEditMode}) => {  
  const { id, title, completed } = todo;

  const onDelete = () => {
    deleteTodo(id);
  }

  const onDoubleClick = () => {
    completeTodo(id);
  }

  const onEdit = () => {
    activateEditMode(todo);
  }

  return(
    <li className="list-group-item" onDoubleClick={onDoubleClick}>
      <span  className={completed ? 'completed' : undefined}>{title}</span>
      <button className="btn btn-danger btn-todo" onClick={onDelete}>Delete</button>
      <button className="btn btn-primary btn-todo" onClick={onEdit}>Edit</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completeTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  activateEditMode: PropTypes.func.isRequired
}

export default connect(null,{ deleteTodo, completeTodo, activateEditMode })(TodoItem)