import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/action'

const AddTask = () => {
  const [todoDescription, setTodoDescription] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <div >
        <input
         
          variant="outlined"
          label="To Do Item"
          fullWidth
          onChange={(e) => setTodoDescription(e.target.value)}
          value={todoDescription}
        />
        <button className="button" onClick={() => {
            dispatch(addTask(todoDescription))
            setTodoDescription('')
          }}>
          ADD
        </button>


      </div>
     
    </div>
  )
}

export default AddTask
