import React from "react";
import Checkbox from "./Checkbox";

const TaskList = (props) => {
  // (C)
  const { list, setList } = props;
  //construimos un manejador de evento porque tenemos a un componente llamdo checkbox
//se cambia el estatus de este eventto cuando la persona le de un checked al componente checkbox 

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;

    // (E)
    //me mapea las tareas que estan terminadas o no estan terminadas
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };

  // (D)
  //aqui se crea un manejador de evento que cuando el usuario le de click a las tareas terminadas
  //esta se me filtra y a las que no me las deja alli tranquilas hasta que esten terminadas
  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };

  // (A-2)
  //me vuelve a mapear la lista de las tareas y asi mismo utilizamos el key 
  //para que me seleccione un elemento en especifico y alli me dice el item que esta terminado
  //y el que no esta terminado 
  const chk = list.map((item) => (
    <Checkbox
      key={item.id}
      id={item.id}
      data={item}
      onChange={onChangeStatus}
    />
  ));
  return (
    <div className="todo-list">
      {/*me pide que mire la longitud de la lista "ARRAY" y si todo esta chequeado, lista las tareas
       entonces me va a mostra No tasks ""no hay tareas*/}
      {list.length ? chk : "No tasks"}
      {/*y si todo esta chequeado pues me muestra el boton "delete all done" para ir removiendo tareas
      y si limpiar toda la lista*/}
      {list.length ? (
        <p>
          <button className="button-blue" onClick={onClickRemoveItem}>
            Delete all done
          </button>
        </p>
      ) : null}
    </div>
  );
};

export default TaskList;
