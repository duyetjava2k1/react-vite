import { useState } from "react"

const TodoNew = (props) => {
    const {addNewTodo , name}  = props
    const [valueInput, setValueInput] = useState("")
    const handleClick = () => {
        addNewTodo(valueInput)
    }
    const handleOnChange = (e) => {
        setValueInput(e.target.value);
    }
    return (
        <>
            <div className="todo-new">
                <input onChange={handleOnChange} type="text" name="valueSearch"/>
                <button onClick={handleClick} style={{ cursor: "pointer"}}>Add</button>
                <div>valueInput : {valueInput}</div>
            </div>
        </>
    )
}

export default TodoNew;