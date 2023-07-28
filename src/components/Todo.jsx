import React from "react";

export const Todo = ({ todo, todoDelete, todoToogleComplete, setTodoEdit }) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title text-right">
          {todo.title}
          <button
            className={`btn btn-sm  ml-2 ${
              todo.completed ? `btn-outline-success` : `btn-success`
            }`}
            onClick={() => todoToogleComplete(todo.id)}
          >
            {todo.completed ? "Terminado" : "Terminar"}
          </button>
        </h3>

        <p className="card-text text-right">{todo.description}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button
          onClick={()=> setTodoEdit(todo)} 
          className="btn btn-sm btn-outline-primary">Editar</button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => todoDelete(todo.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
