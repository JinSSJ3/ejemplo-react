import React, { useState } from "react";
import "../styles/Home.scss";
import { Button, makeStyles, TextField } from "@material-ui/core";
import NavBar from "../components/Navegacion/NavBar";
import "../styles/Login.scss";
import logo from "../static/logo_bank.png";
import axios from "axios";
let base64 = require("base-64");
const useStyles = makeStyles((theme) => ({
  logo: {
    height: "165px",

    [theme.breakpoints.down("sm")]: {
      height: "100px",
    },
  },
  logoImg: {
    width: "100%",
    height: "100%",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const [usuarioLogin, setUsuario] = useState({
    email: "",
    password: "",
  });
  function ingresoDeCorreooo(event) {
    setUsuario({
      ...usuarioLogin,
      ...{ email: event.target.value },
    });
    console.log("login", event.target.value);
  }
  const handleChangePassword = (event) => {
    setUsuario({ ...usuarioLogin, ...{ password: event.target.value } });
    console.log("login pass", event.target.value);
  };
  const handleIniciarSesion = async () => {
    const body = {
      usuario: usuarioLogin.email,
      clave: usuarioLogin.password,
    };
    try {
      const response = await axios.post(
        "http://ec2-44-193-230-143.compute-1.amazonaws.com:8081/logueo",
        body
      );

      console.log("LOGIN:", response.data);
      if (response.data.exito) {
        alert("Iniciar sesion correcto");

        props.history.push("/user");
      } else {
        alert("Error");
      }

      //localStorage("credenciales");

      /* const headers = {
        Authorization:
          "Basic " +
          base64.encode(usuarioLogin.email + ":" + usuarioLogin.password),
      }; */
      /*    let config = {
        headers: {
          Authorization:
            "Basic " +
            base64.encode(usuarioLogin.email + ":" + usuarioLogin.password),
        },
      }; */
      /*  const response2 = await axios.get(
        "http://ec2-44-193-230-143.compute-1.amazonaws.com:8081/api/transferencias/verificar-cuenta?numero=405123654845421"
        //,config
      );
   */
      //console.log("LOGIN:", response2);
    } catch (error) {
      console.log("LOGIN:", "No conection");
    }

    //props.history.push("/user");
  };
  const handleCrearCuenta = () => {
    props.history.push("/account-creation");
  };
  const iniciarSesion = async (props) => {
    console.log("Iniciar sesion");
  };
  return (
    <div className="home-page-wrapper">
      <NavBar title={props.title} />
      <div className="login ccontainer">
        <div className="form">
          <div className={classes.logo}>
            <img
              className={classes.logoImg}
              src={logo}
              alt="logo-banco-login"
            />
          </div>
          <TextField
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                iniciarSesion();
              }
            }}
            fullWidth
            style={{ margin: "4% 2%" }}
            id="outlined-email-input"
            label="Correo"
            type="email"
            autoComplete="current-password"
            variant="outlined"
            onChange={ingresoDeCorreooo}
            value={usuarioLogin.email}
          />

          <TextField
            onKeyUp={(event) => {
              if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                iniciarSesion();
              }
            }}
            fullWidth
            style={{ margin: "4% 2%" }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={handleChangePassword}
            value={usuarioLogin.password}
          />

          <div
            className="anchor"
            style={{ alignSelf: "flex-end" }}
            onClick={() => alert("Recuperar password")}
          >
            Recuperar contraseña
          </div>

          <Button
            style={{ margin: "4% 2%" }}
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleIniciarSesion}
          >
            Iniciar Sesion
          </Button>
          <div> o </div>
          <Button
            style={{ margin: "4% 2%" }}
            color="primary"
            variant="contained"
            fullWidth
            onClick={handleCrearCuenta}
          >
            Crear cuenta
          </Button>
        </div>
      </div>
      {/*           ESTE es el LOGIN CTV
            <Button variant="contained" color="primary" onClick={handleIniciarSesion}>Iniciar sesión</Button>
            <Button variant="contained" color="secondary" onClick={handleCrearCuenta}>Crear cuenta</Button>
            
             */}
    </div>
  );
};
export default Login;
