import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({todos, todoDelete, todoToogleComplete,setTodoEdit}) => {

 
  return (
    <div>
      <h2 className="text-center display-4">Soy TodoList</h2>

      {
        todos.length === 0
        ? (
          <div className="alert alert-primary">
            No hay tareas, por favor agrega una {":)"}
          </div>
        ): (
          todos.map(todo => (<Todo
            todo = {todo}
            key={todo.id}
            todoDelete={todoDelete}
            todoToogleComplete={todoToogleComplete}
            setTodoEdit={setTodoEdit} />
        ))
        )
      }
     
    </div>
  );
};
