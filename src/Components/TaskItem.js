import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delTask, filTask, updateItem } from '../redux/action'
import Edit from './Edit'
const TaskItem = ({ task, tas }) => {
  const [todoDescription, setTodoDescription] = useState('')
  const dispatch = useDispatch()

  return (
    <div >
      <form >
        <input className="input" 
          type="text"
          value={task.Description}
          onChange={(e) => setTodoDescription(e.target.value)}
          className={task.isDone ? 'compt' : null}
        />
        <div>

        <button className="button" onClick={() => {
            dispatch(delTask(task.id))
          }}>DELETE</button>

       <button className="button" onClick={() => dispatch(updateItem(task.id))}>COMPLETE</button>
        </div>
        
        <Edit task={task} />
      </form>
    </div>
  )
}

export default TaskItem
