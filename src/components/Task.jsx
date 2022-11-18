import React from 'react';
import circle_btn from "../img/circle.svg";
import trashcan_btn from "../img/trashcan.svg";

const Task = ({children}) => {
  return (
    <li className="App__task">
      <img src={circle_btn} alt="Circle btn"/>
      <p>{children}</p>
      <img src={trashcan_btn} alt="Trashcan btn"/>
    </li>
  );
};

export default Task;