import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { useEffect, useState } from "react";


const initialTodos = [
  {
    id:1,
    title:'Todo #1',
    description: 'Desc del Todo #1',
    completed: false
  },

];

const localTodos = JSON.parse(localStorage.getItem('todos'));

function App() {

  const [todos, setTodos] = useState(localTodos || initialTodos);

  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));

  },[todos])

  const todoDelete = (todoId) => {


    if(todoEdit && todoId === todoEdit.id){
      setTodoEdit(null)

    }
    const changedTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(changedTodos);
  };

  const todoToogleComplete = (todoId) => {
    /* const changedTodos = todos.map(todo => {

      const todoEdit = {
        ...todo,
        completed: !todo.completed
      }

      if(todo.id === todoId){
        return todoEdit
      } else{
        return todo
      }
    }) */

    const changedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    /*  const changedTodos = todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo)
     */
    setTodos(changedTodos);
  };

  const todoAdd = (todo) => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };

    const changedTodos = [newTodo, ...todos];

    setTodos(changedTodos);
  };

  const todoUpdate = (todoEdit) => {
    const changedTodos = todos.map((todo) =>
      todo.id === todoEdit.id ? todoEdit : todo
    );

    setTodos(changedTodos);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToogleComplete={todoToogleComplete}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="col-2">
          <TodoForm
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
