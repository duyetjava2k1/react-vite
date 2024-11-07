import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLodo from './assets/react.svg';

const App = () => {
    const name = "Duueyet"
    const age = "25"
    const data = {
        address : "Thai Binh",
        country : "Vietnam"
    }
    const addNewTodo = (name) => {
        alert(`addNewToDo name : ${name}`)
    }
    
    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew addNewTodo={addNewTodo}/>
            <TodoData name={name} age = {age} data = {data} />
            <div className='todo-image'>
                <img src={reactLodo} alt="" className='logo'/>
            </div>
        </div>
    )
}

export default App
