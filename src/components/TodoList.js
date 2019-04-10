import React from 'react';
import TodoItem from './todoitem';
import TodoListNav from './todolistnav';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.filter_list = this.filter_list.bind(this);
  }
  handleOnChange(e) {
    const filter = e.currentTarget.value;
    this.setState(() => ({ filter }));
  }
  filter_list(list) {
    if (this.state.filter === "all") {
      return this.props.list;
    } else if (this.state.filter === "active") {
      return this.props.list.filter((obj) => {
        return obj.active
      });
    } else if (this.state.filter == "finished") {
      return this.props.list.filter((obj) => {
        return !obj.active
      });
    }
  }
  render() {
    return(
      <div className="container">
        <TodoListNav handleOnChange={this.handleOnChange} current_filter={this.state.filter}/>
        {this.filter_list(this.props.list).map((item) => (
          <TodoItem handleFinishTodo={this.props.handleFinishTodo} handleDeleteTodo={this.props.handleDeleteTodo} key={item.name} item={item} />
        ))}
      </div>
    );
  }
}

export default TodoList;
