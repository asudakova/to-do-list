import React from 'react';
import Task from "./Task";


const TasksList = ({tasks}) => {
  return (
    <ul className="App__list">
      {
        tasks.map(task =>
          <Task key = {task.id}>{task.text}</Task>
        )
      }
    </ul>
  );
};

export default TasksList;