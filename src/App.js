import React from "react";
import "./App.scss";
import Container from "./components/Container";

/*aqui puedo llamar a mis componentes en este caso solo esta llamando container 
porque en el componente container ya se encuentra exportado el formtodo y el tasklist
y en el componente tasklist ya se encuentra checkbox por lo tanto solo llama a container porque
es el padre de todos los demas componentes como tal.*/
function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}
//y aqui se exporta, es como decir "muestramelo"
export default App;
