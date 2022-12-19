import React, { useState } from "react";
import TaskList from "./Tasklist";
import FormTodo from "./FormTodo";

//aqui me va almacenar los datos que sean ingresados en el input 
const Container = () => {
  const [list, setList] = useState([]);
  
  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    //se le agrega el atributo hand y se le pasamos el metodo handleadditem 
    //mediante los props que se le agregaron en el componente Formtodo
    <div>
      <FormTodo handleAddItem={handleAddItem} />

      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;
