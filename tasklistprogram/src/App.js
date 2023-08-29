import React, { useState } from "react";
import NewTask from "./modules/NewTask";
import TasksList from "./modules/TasksList";
import styles from "./modules/App.module.css"

function App() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({target}) => {
    const {name, value} = target;
    setNewTask((prev) => ({...prev, id: Date.now(), [name]: value}));
  };

  const [allTasks, setAllTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault()
    if(!newTask.title) return;
    setAllTasks((prev) => [newTask, ...prev]);
    setNewTask({});
  };
  const handleDelete = (taskIdToRemove) => {
    setAllTasks((prev) => prev.filter(
      (task) => task.id !== taskIdToRemove
    ));
  };

  return (
    <main className={styles.app}>
      <h1 style={{padding:"2rem", textAlign:"center"}}>Task</h1>
      <NewTask 
        newTask={newTask}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TasksList allTasks={allTasks} handleDelete={handleDelete} />
    </main>
  )
}

export default App;
