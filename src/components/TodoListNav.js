import React from 'react';

const TodoListNav = (props) => (
  <div>
    <label>
      <input
        type="radio"
        name="todo_filter"
        value="all"
        checked={props.current_filter === "all"}
        onChange={props.handleOnChange}
        />
      Show All
    </label>
    <label>
      <input
        type="radio"
        name="todo_filter"
        value="active"
        checked={props.current_filter === "active"}
        onChange={props.handleOnChange}
        />
      Active Only
    </label>
    <label>
      <input
        type="radio"
        name="todo_filter"
        value="finished"
        checked={props.current_filter === "finished"}
        onChange={props.handleOnChange}
        />
      Finished Only
    </label>
  </div>
);

export default TodoListNav;
