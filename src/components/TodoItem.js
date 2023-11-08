import './TodoItem.css'

function TodoItem(props){
    const deleteTodo = () => {
        props.onCheck(props.id);
      };
    console.log(props)

    return (
        <div className="todo" onClick={deleteTodo}>
            <input type="checkbox"></input>
            <label>{props.text}</label>
        </div>
    )
}

export default TodoItem