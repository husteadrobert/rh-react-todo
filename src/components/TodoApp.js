import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import AddTodo from './addtodo';
import TodoList from './todolist';
import _ from 'lodash';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_list: [{name: "Do something", active: true}]
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleFinishTodo = this.handleFinishTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  setListForView(list) {
    const result = _.groupBy(list, obj => obj.active);
    const incomplete_list = result.true || [];
    const complete_list = result.false || [];
    return incomplete_list.concat(complete_list);
  }

  handleAddTodo(todo){
    if (todo) {
      const new_todo = {name: todo, active :true}
      this.setState((prevState) => (
        {todo_list: prevState.todo_list.concat(new_todo)}
      ));
    }
  }

  handleFinishTodo(todo){
   const result = this.state.todo_list.find((obj) => ( obj.name === todo.name));
    if (result) {
      const todo_list = this.state.todo_list;
      const index = todo_list.indexOf(result)
      todo_list[index].active = !todo_list[index].active

      this.setState(() => ({ todo_list }));
    }
  }

  handleDeleteTodo(todo) {
    const result = this.state.todo_list.find((obj) => ( obj.name === todo.name));
    if (result) {
      console.log(result);
      const todo_list = this.state.todo_list.filter((obj) => (obj.name !== todo.name));

      this.setState(() => ({ todo_list }));
    }
  }

  render() {
    return (
      <div>
        <Header subtitle="It's terrible."/>
        <AddTodo handleAddTodo={this.handleAddTodo}/>
        <TodoList handleFinishTodo={this.handleFinishTodo} handleDeleteTodo={this.handleDeleteTodo} list={this.setListForView(this.state.todo_list)}/>
      </div>
    );
  }
}

export default TodoApp;
