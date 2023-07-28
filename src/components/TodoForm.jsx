import React, { useState, useEffect } from "react";

const initialFormValue = {
  title: "",
  description: "",
};

export const TodoForm = ({ todoAdd, todoEdit, todoUpdate,setTodoEdit }) => {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState();


  useEffect(() => {
    if(todoEdit){
      setFormValue(todoEdit)

    }else{
      setFormValue(initialFormValue)
    }
  
  }, [todoEdit])
  
  const { title, description } = formValue;

  const handleInputChange = (e) => {
    const changedFormValue = {
      ...formValue,
      [e.target.name]: e.target.value,
    };

    setFormValue(changedFormValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Debes colocar un título");
      return;
    }
    if (description.trim() === "") {
      setError("Debes colocar una descripción");
      return;
    }

    if(todoEdit){
      //actualizando
      todoUpdate(formValue)
      setSuccessMessage('Actualizado con éxito')
    }else{
      todoAdd(formValue)
      setSuccessMessage('Agregado con éxito')
      setFormValue(initialFormValue);
    }
    setTimeout(() => {
      setSuccessMessage(null)
    }, 2000);
    setError(null)
  };

  return (
    <div>
      <h2 className="text-center display-5">{todoEdit ? 'Editar tarea' : 'Nueva tarea'} </h2>

      {
        todoEdit &&
        <button
         className="btn btn-sm btn-warning mb-2"
         onClick={()=>setTodoEdit(null)}>
        Cancelar edición
        </button>
      }
      

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          className="form-control"
          value={title}
          name="title"
          onChange={handleInputChange}
        />

        <textarea
          placeholder="Descripción"
          className="form-control mt-2"
          value={description}
          name="description"
          onChange={handleInputChange}
        ></textarea>
        <button className="btn btn-primary btn-block mt-2">
         {todoEdit ? 'Actualizar tarea' : 'Agregar Tarea'}
        </button>
      </form>
      
      {
        error && 
        (
          <div className="alert alert-danger mt-2">
            {error}
          </div>
        )
      }
      {
        successMessage &&
        (
          <div className="alert alert-success mt-3">
            {successMessage}
          </div>
        )
      }
    </div>
  );
};
