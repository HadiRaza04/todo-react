import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './todo.css'
const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {

  const [color, setColor] = useState(false);
  // function changeColor() {

  // }

  return (
    <>
    <div className='w-[100%] bg-purple-500 flex flex-row justify-around mt-3 p-2'>
        <p  className={`md:text-xl text-sm w-[80%] ${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div className='flex flex-row items-center w-[80px] justify-around'>
            <span className={color ? "text-blue-700" : "text-black"} onClick={() => setColor((prev) => !prev)}><FontAwesomeIcon icon={faCheck} className='hover:text-gray-800' onClick={() => toggleComplete(task.id)} /></span>
            <FontAwesomeIcon icon={faPenToSquare} className='hover:text-gray-800' onClick={() => editTodo(task.id)} />
            <span className='text-red-800'><FontAwesomeIcon icon={faTrash} className='hover:text-gray-800 color-red-800' onClick={() => deleteTodo(task.id)} /></span>
        </div>
    </div>
    
    </>
  )
}
export default Todo