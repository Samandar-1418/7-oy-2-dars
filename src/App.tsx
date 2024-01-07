import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo } from './Redux/store';
import './App.css';

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  function handlePlus() {
    let newTodo = {
      id: Math.random() * 10000,
      title: 'task 1',
      completed: false,
    };
    dispatch(addTodo(newTodo));
  }

  return (
    <>
      {todos.map((todo) => (
        <div
          onClick={() => dispatch(updateTodo({ id: todo.id }))}
          key={todo.id}
          style={{ textDecoration: todo.completed ? 'underline' : 'none' }}
        >
          {todo.title}
        </div>
      ))}
      <button onClick={handlePlus}>+</button>
    </>
  );
}

export default App;
