import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './todo.css'
const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <>
    <div className='w-[100%] bg-purple-500 flex flex-row justify-around mt-3 p-2'>
        <p  className={`md:text-xl text-sm w-[80%] ${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div className='flex flex-row items-center w-[80px] justify-around'>
            <FontAwesomeIcon icon={faCheck} className='hover:text-gray-800' onClick={() => toggleComplete(task.id)} />
            <FontAwesomeIcon icon={faPenToSquare} className='hover:text-gray-800' onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} className='hover:text-gray-800' onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
    </>
  )
}
export default Todo