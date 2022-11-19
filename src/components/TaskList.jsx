import React from 'react';
import Task from "./Task";

const taskList = [
  {id: 1, text: "Learn React"},
  {id: 2, text: "Learn GIT"},
  {id: 3, text: "Learn Cypress"},
]

const TaskList = () => {
  return (
    <ul className="App__list">
      {
        taskList.map(task =>
          <Task key = {task.id}>{task.text}</Task>
        )
      }
    </ul>
  );
};

export default TaskList;