import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todos from '../todos/Todos';
import AddTodo from '../todos/AddTodo';
import EditTodo from '../todos/EditTodo';
import SearchTodo from '../todos/SearchTodo';

const Home = ({ todo: { editMode }}) => {
  return (
    <Fragment>
      {
        editMode ?
        <EditTodo/>:
        <AddTodo/>
      }
      <SearchTodo/>
      <Todos/>
    </Fragment>
  )
}

Home.propTypes = {
  todo: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todo: state.todo
})

export default connect(mapStateToProps)(Home)