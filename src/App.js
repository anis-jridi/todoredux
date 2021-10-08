import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

import AddTask from './Components/AddTask'
import TaskList from './Components/TaskList';

function App() {
    const task = useSelector((state) => state.task)
 
  return (
    <div className="App">
    <div>
      <h2 className="title">TODO APP</h2>
     <AddTask/>
     <TaskList task={task}  />

</div>
</div>  )
}

export default App
