const TodoNew = (props) => {
    console.log(props)
    const {addNewTodo , name}  = props
    const handleClick = () => {
        alert("Oke")
    }
    const handleOnChange = (e) => {
        console.log("handleOnChange " +e.target.value)
    }
    return (
        <>
            <div className="todo-new">
                <input onChange={handleOnChange} type="text" name="valueSearch"/>
                <button onClick={handleClick} style={{ cursor: "pointer"}}>Add</button>
            </div>
        </>
    )
}

export default TodoNew;