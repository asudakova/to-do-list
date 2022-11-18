import React from "react";
import './styles/reset.css'
import './styles/index.scss'
import Task from "./components/Task";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <div className="App__card">
        <h1 className="App__title">To Do:</h1>
        <Input/>
        <ul className="App__list">
          <Task>Learn React</Task>
          <Task>Learn GIT</Task>
        </ul>

      </div>
    </div>
  );
}

export default App;
