import './App.css';
import TodoItem from './components/TodoItem';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
  }

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
};

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="App-form" onSubmit={handleAddTodo}>
        <input type="text" onInput={(e) => setInput(e.target.value)}></input>
        <button type="submit">+</button>
      </form>
      <div className='App-Todos'>
        {count > 0 ? todos.map(todo => 
          <TodoItem 
            key={todo.id}
            text={todo.text}
            id={todo.id}
            onCheck={handleTodoDone}
          />) :
          <p>No todos</p>
        }
      </div>
    </div>
  );
}

export default App;
