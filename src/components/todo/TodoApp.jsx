import '../todo/todo.css';
import TodoData from '../todo/TodoData.jsx';
import TodoNew from '../todo/TodoNew.jsx';
import reactLogo from '../../assets/react.svg';
import { useState } from 'react';

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

    const addNewTodo = (name) => {
        const todo = {
            id: randomIntFromInterval(1, 1000000),
            value: name
        }
        setTodoList([...todoList, todo])
    }

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const handleDelete = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        setTodoList(newTodo);
    }
    return (
        <div className="todo-container">
                <div className="todo-title">Todo List</div>
                <TodoNew addNewTodo={addNewTodo} />
                {todoList.length > 0 ?
                    <>
                        <TodoData handleDelete={handleDelete} todoList={todoList} />
                    </>
                    :
                    <>
                        <div className='todo-image'>
                            <img src={reactLogo} alt="" className='logo' />
                        </div>
                    </>
                }
            </div>
    )
}


export default TodoApp;