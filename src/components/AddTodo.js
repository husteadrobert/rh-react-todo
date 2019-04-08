import React from 'react';
import AddTodoModal from './addtodomodal';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      modal_active: false
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleAddTodo(e) {
    e.preventDefault();
    const todo = e.target.elements.todo.value.trim();
    const error = this.props.handleAddTodo(todo);

    this.setState(() => ({error}));
    this.setState(() => ({modal_active: false}));

    if (!error) {
      e.target.elements.todo.value = '';
    }
  }
  handleClose(){
    this.setState(() => ({ modal_active: false }));
  }
  render() {
    return(
      <div>
        <button onClick={(e) => { 
          this.setState(() => ({modal_active: true}))
        }}>Add Todo</button>
        <AddTodoModal modal_active={this.state.modal_active} handleClose={this.handleClose} handleAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

export default AddTodo;
