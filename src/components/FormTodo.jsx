import React, { useState } from "react";

// los props pasan los datos de un componente a otro, se debe llamar como un atributo
const FormTodo = (props) => {
  //creamos una costante llamada healeadditem que se va a utilizar en cualquier componente que la necesitemos,
  // con el props me recibe unos caracteres
  const { handleAddItem } = props; //(C-1)
  //el setDEscription nos servira para modificar la descripcion 
  const [description, setDescription] = useState(""); // (F-1)
  const handleSubmit = (e) => {
    e.preventDefault(); // (E)
    // (C-2)
    //aqui le agregamos las funciones que tenga nuestro componente handleadditem
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });
    //el usuario debe agregar una descripcion
    setDescription(""); // (B)
  };
  // aqui creamos todo nuestro documento HTML
  return (
    <form onSubmit={handleSubmit}>
      {/*(D)*/}
      <div className="todo-list">
        <div className="file-input">
          {/*(F-2)*/}
          <input
            type="text"
            className="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {/*(A)*/}
          <button
            className="button pink"
            disabled={description ? "" : "disabled"}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
