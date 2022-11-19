import React from "react";
import './styles/reset.css'
import './styles/index.scss'
import Input from "./components/Input";
import TaskList from "./components/TaskList";


function App() {
  return (
    <div className="App">
      <div className="App__card">
        <h1 className="App__title">To Do:</h1>
        <Input/>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
