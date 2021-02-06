import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deactivateEditMode } from '../../actions/todoActions';
import { editTodo } from '../../actions/todoActions';

const EditTodo = ({todo: { todoToEdit }, deactivateEditMode, editTodo}) => {
  const [title, setTitle] = useState(todoToEdit.title);
  
  const onChange = e => setTitle(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    editTodo(todoToEdit.id, title);
    setTitle('');
    deactivateEditMode();
  }

  const deactivate = e => {
    e.preventDefault();
    deactivateEditMode();
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" name="title" value={title} onChange={onChange}/>
      </div>
      <button type="submit" className="btn btn-success" disabled={title === '' ? true : false}>Submit</button>
      <button className="btn btn-secondary" style={{marginLeft: '5px'}} onClick={deactivate}>Cancel</button>
    </form>
  )
}

EditTodo.propTypes = {
  todo: PropTypes.object.isRequired,
  deactivateEditMode: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todo: state.todo
})

export default connect(mapStateToProps, { deactivateEditMode, editTodo })(EditTodo);
