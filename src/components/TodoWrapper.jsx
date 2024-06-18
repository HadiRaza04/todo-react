import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    }
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id? {...todo, isEditing:!todo.isEditing} : todo));
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo));
    }
  return (
    <div className='w-[80%] md:w-[500px] h-[80vh] flex flex-col px-2 py-0 pb-2 items-center overflow-y-scroll bg-[#07013b] no-scrollbar'>
        <div className='sticky top-0 bg-[#07013b] w-full flex items-center justify-center'>
            <h1 className='text-xl sm:text-3xl lg:text-4xl mb-2 text-white font-bold'>Todos</h1>

        </div>
        <TodoForm addTodo={addTodo} />
        {
            todos.map((todo, index) => (
                todo.isEditing ? (
                <EditTodoForm key={index} editTodo={editTask} task={todo} />
                ) : (
                <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                )
            ))
        }
    </div>
  )
}
export default TodoWrapper