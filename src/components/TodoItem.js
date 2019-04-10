import React from 'react';

const TodoItem = (props) => (
  <div className="todoitem">
    <p className={props.item.active ? "description active" : "description inactive"}>{ props.item.name }</p>
    <div>
      <button onClick={(e) => {props.handleFinishTodo(props.item)}}>{props.item.active ? "Finish" : "Undo"}</button>
      <button onClick={(e) => {props.handleDeleteTodo(props.item)}}>Delete</button>
    </div>
  </div>
);

export default TodoItem;
