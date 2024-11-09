const TodoData = (props) => {
    const { todoList, handleDelete } = props;
    const listItem = todoList.map((item) =>
        <div key={item.id} className="todo-data-row">
            <div>{item.value}</div>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
    )

    return (
        <>
            <div className="todo-data">
                {listItem}
            </div>
        </>
    )
}

export default TodoData;