//import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
//import axios from "axios";
import { llamadaPaisesAPI } from "./conection/example.conection";

function AppEjemplo(props) {
  const [paises, setPaises] = useState([]);
  const llamadaBackend = async (endpoint) => {
    const paisesVar = await llamadaPaisesAPI();

    setPaises(paisesVar || []);
    console.log("Paises", paisesVar);
  };
  useEffect(() => {
    llamadaBackend();
  }, []);

  useEffect(() => {
    return () => {
      document.title = "--------";
    };
  }, []);
  const { history, owner } = props;

  const [nombre, setNombre] = useState("");

  const recibirNombre = (event) => {
    setNombre(event.target.value);
    document.title = event.target.value;
  };
  function clickRegistrar() {
    //setNombre(".-.");
    props.history.push("/");
  }
  const mmmlll = () => {
    setNombre("Contained");
  };
  return (
    <div className="contenedor">
      <div className="formulario">
        <h1>{`Owner: ${owner}`}</h1>
        <h1>{nombre}</h1>
        <input onChange={recibirNombre} value={nombre} />
        <Button variant="contained" color="primary" onClick={mmmlll}>
          Contained
        </Button>
        <Button variant="outlined" color="secondary" onClick={clickRegistrar}>
          Outlined
        </Button>
        <button onClick={clickRegistrar}>Registrar</button>
        <ol>
          {paises.map((pais, index) => (
            <li key={index}>{pais.name + " - Poblacion:" + pais.population}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default AppEjemplo;
