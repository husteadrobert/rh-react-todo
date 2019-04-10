import React from 'react';
import Modal from 'react-modal';

const AddTodoModal = (props) => (
  <Modal
    isOpen={props.modal_active}
    onRequestClose={props.handleClose}
    appElement={document.getElementById('app')}
    contentLabel="Add Todo"
    className="modal"
  >
    <h1>Lol Modal</h1>
    <form onSubmit={props.handleAddTodo}>
      <input type="text" name="todo" />
      <button>Add Todo</button>    
    </form>
  </Modal>
);

export default AddTodoModal;
