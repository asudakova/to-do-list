import React, {useState} from 'react';
import add_btn from "../img/add.svg";

const Input = ({addTask}) => {
  const [task, setTask] = useState({text: ''})

  const createTask = () => {
    const newTask = {
      ...task, id: Date.now()
    }
    addTask(newTask)
    setTask({text: ''})
  }

  return (
    <div className="App__input">
      <input
        value={task.text}
        onChange={e => setTask({text: e.target.value})}
        placeholder="Write here something..."
        type="text"/>
      <img onClick={createTask} src={add_btn} alt="Add btn"/>
    </div>
  );
};

export default Input;