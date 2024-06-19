import React, { useState } from 'react'
const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
  return (
    <form className='w-[100%] flex flex-row justify-between' onSubmit={handleSubmit}>
        <input type="text" placeholder='What is the task for today ❔' className='p-1 text-sm sm:text-xl border-0 outline-0 border-blue-500  text-white rounded-md bg-[#1a154e]  w-[80%]  transition-all duration-100' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='bg-blue-700 text-white p-2 text-sm sm:text-xl px-4 hover:bg-blue-600 rounded-md ml-1'>Add</button>
    </form>
  )
}
export default TodoForm