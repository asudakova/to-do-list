import React, {useState} from 'react';
import circle_btn from "../img/circle.svg";
import check_btn from "../img/check-mark.svg";
import trashcan_btn from "../img/trashcan.svg";

const Task = ({children}) => {
  const [isDone, setIsDone] = useState(false)
  const switchIsDone = () => {
    return isDone ? setIsDone(false) : setIsDone(true)
  }
  return (
    <li className="App__task">
      <img onClick={switchIsDone} src={isDone ? check_btn : circle_btn} alt="Circle btn"/>
      <p className={isDone ? 'done' : ''}>{children}</p>
      <img src={trashcan_btn} alt="Trashcan btn"/>
    </li>
  );
};

export default Task;