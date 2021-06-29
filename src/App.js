//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import React, { useState } from "react";


function App() {
  const tasks = [
    {
    id: 1,
    text: 'Docter Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true
  }, 
  {
    id: 2,
    text: 'Meeting at school',
    day: 'Feb 6th at 1:30pm',
    reminder: true
  }, 
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false
  }
  ]
  const [stateTasks,setTasks ] = useState(tasks);
  //delete task
  const deleteTask=(id)=>{
    setTasks(stateTasks.filter((task)=>task.id!==id))
  }
  //toggle to the class reminder
  const toggleReminder=(id)=>{
    setTasks(stateTasks.map((task)=>task.id==id ? {...task,reminder:!task.reminder} : task))    
  }
  return (
    <div className="container">
     <Header />
     <AddTask/>
     {stateTasks.length > 0 ? <Tasks 
     tasks={stateTasks} 
     onDelete={deleteTask}
     onToggle={toggleReminder} /> : 'no task exist'} 
    </div>
  );
}


export default App;
