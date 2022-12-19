import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//ruta para mostrar en HTML
//todo lo que este dentro de Root me lo va a renderizar en el index HTML

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //aqui se añaden todos los componentes para que me los renderice en el index
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
