import React, {useState} from "react";
import './styles/reset.css'
import './styles/index.scss'
import Input from "./components/Input";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: "Learn React"},
    {id: 2, text: "Learn GIT"},
    {id: 3, text: "Learn Cypress"},
  ]);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
    console.log(tasks)
  }
  return (
    <div className="App">
      <div className="App__card">
        <h1 className="App__title">To Do:</h1>
        <Input addTask={addTask}/>
        <TasksList tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
