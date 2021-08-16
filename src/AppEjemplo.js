//import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button } from "@material-ui/core";

function App(props) {
  const [nombre, setNombre] = useState("");

  const recibirNombre = (event) => {
    setNombre(event.target.value);
    document.title = event.target.value;
  };
  function clickRegistrar() {
    setNombre(".-.");
  }
  const mmmlll =()=>{
    setNombre("Contained");
  }
  return (
    <div className="contenedor">
      <div className="formulario">
        <h1>{nombre}</h1>
        <input onChange={recibirNombre} value={nombre} />
        <Button variant="contained" color="primary" onClick={mmmlll}>
          Contained
        </Button>
        <Button variant="outlined" color="secondary" onClick={clickRegistrar}>
          Outlined
        </Button>
        <button onClick={clickRegistrar}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
