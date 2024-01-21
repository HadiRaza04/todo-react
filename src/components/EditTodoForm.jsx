import React, { useState } from 'react'
const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }
  return (
    <form className='w-[100%] m-2 flex flex-row justify-between' onSubmit={handleSubmit}>
        <input type="text" placeholder='Update Task' className='p-2 md:text-xl text-sm border-0 outline-0 border-blue-500  text-white rounded-md bg-[#1a154e]  w-[70%]  transition-all duration-100' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='bg-blue-700 md:text-xl  text-white text-sm  px-4 hover:bg-blue-600 rounded-md '>Update Task</button>
    </form>
  )
}
export default EditTodoForm