const TodoData = (props) => {
    
    const {name, age, data} = props;
    return(
        <>
            <div className="todo-data">
                <div>Watching Youtobe</div>
                <div>Learning React</div>
                <div>{name}</div>
                <div>{age}</div>
                <div>{data.address}</div>
                <div>{data.country}</div>
            </div>
        </>
    )
}

export default TodoData;