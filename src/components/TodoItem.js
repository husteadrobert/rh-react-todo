import React from 'react';

const TodoItem = (props) => (
  <div>
    <p>{props.item.name}</p>
    <p>{ props.item.active ? "Active" : "Not Active"}</p>
    <button onClick={(e) => {props.handleFinishTodo(props.item)}}>{props.item.active ? "Finish" : "Undo"}</button>
    <button onClick={(e) => {props.handleDeleteTodo(props.item)}}>Delete</button>
  </div>
);

export default TodoItem;
