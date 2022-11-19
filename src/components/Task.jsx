import React, {useState} from 'react';
import circle_btn from "../img/circle.svg";
import check_btn from "../img/check-mark.svg";
import trashcan_btn from "../img/trashcan.svg";

const Task = ({task, remove}) => {
  const [isDone, setIsDone] = useState(false)

  const switchIsDone = () => {
    isDone ? setIsDone(false) : setIsDone(true)

    return isDone
  }

  return (
    <li className="App__task">
      <img onClick={switchIsDone} src={isDone ? check_btn : circle_btn} alt="Circle btn"/>
      <p className={isDone ? 'done' : ''}>{task.text}</p>
      <img onClick={() => remove(task)} src={trashcan_btn} alt="Trashcan btn"/>
    </li>
  );
};

export default Task;