import React, {useState} from 'react';
import add_btn from "../img/add.svg";

const Input = ({add}) => {
  const [task, setTask] = useState({text: ''})

  const createTask = () => {
    const newTask = {
      ...task, id: Date.now()
    }
    add(newTask)
    setTask({text: ''})
  }

  const isEnterPressed = (event) => {
    if (event.code === 'Enter') {
      createTask();
    }
  }

  return (
    <div className="App__input">
      <input
        value={task.text}
        onChange={e => setTask({text: e.target.value})}
        onKeyUp={isEnterPressed}
        placeholder="Write here something..."
        type="text"/>
      <img onClick={createTask} src={add_btn} alt="Add btn"/>
    </div>
  );
};

export default Input;