import React, { useState } from 'react';
import './styles/TodoInput.css';


let TodoInput = props => {

  // useState
  let [task, setTask] = useState('');

  // changing the value of TaskInput
  let changeHandler = e => {
    setTask(e.target.value);
  }

  // add todo
  let addTodo = () => {
    if (task == '') return;
    let taskData = { 
      id: Math.floor(Math.random() * 1000) + 1,
      task: task, 
      taskCompleted: false,
    }
  
    props.addTask(taskData);
    setTask('');
  }

  // on clicking enter key
  let keyDownHandler = e => {
    if (e.keyCode == 13) addTodo();
  }

  // add btn
  let clickHandler = () => addTodo();


  return(
    <div className='todo-input'>
      <button className='add-btn' onClick={ clickHandler }></button>
      <input type="text" placeholder='Create a new todo' value={ task } onChange={ changeHandler } onKeyDown={ keyDownHandler } />
    </div>
  ); 
};


export default TodoInput;
