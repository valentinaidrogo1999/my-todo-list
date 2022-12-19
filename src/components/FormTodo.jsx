import React, { useState } from "react";
//aqui creamos jun manejador de eventos onsubmit
// los props pasan los datos de un componente a otro, se debe llamar como un atributo
const FormTodo = (props) => {
  //creamos una costante llamada healeadditem que se va a utilizar en cualquier componente que la necesitemos,
  // con el props me recibe unos caracteres
  const { handleAddItem } = props; //(C-1)
  //el setDEscription nos servira para guardar lo que pasara el usuario  
  const [description, setDescription] = useState(""); // (F-1)
  //si el evento no se maneja explícitamente, su acción predeterminada
  // no debe tomarse como lo haría normalmente.
  const handleSubmit = (e) => {
    //evita que se recargue la paguina y nos haga perder algo de informacion
    e.preventDefault(); // (E)
    // (C-2)
    //aqui le agregamos las caracteristicas a nuestra costante handleadditem
    handleAddItem({
      done: false,
      id: (+new Date()).toString(),
      description,
    });
    //cuando se ejecute el evento de submi del formulario
    // este setdescription nos va actualizar el estado
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
          {/*mientras en el input no se le add alguna tarea este boton estara desabilitado
          hasta que se le agregue algo para que pueda funcionar*/}
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
