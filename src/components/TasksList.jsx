import React from 'react';
import Task from "./Task";


const TasksList = ({tasks, remove}) => {
  return (
    <ul className="App__list">
      {
        tasks.map(task =>
          <Task key = {task.id} task={task} remove={remove}/>
        )
      }
    </ul>
  );
};

export default TasksList;