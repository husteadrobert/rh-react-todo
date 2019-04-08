import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(e) {
    e.preventDefault();
    const todo = e.target.elements.todo.value.trim();
    const error = this.props.handleAddTodo(todo);

    this.setState(() => ({error}));

    if (!error) {
      e.target.elements.todo.value = '';
    }
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleAddTodo}>
          <input type="text" name="todo" />
          <button>Add Todo</button>    
        </form>
      </div>
    );
  }
}

export default AddTodo;
