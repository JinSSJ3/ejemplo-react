import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./../styles/Login.scss";
import logo from "../static/logo_bank.png";
const Estilos = makeStyles((theme) => ({
  logo: {
    height: "65px",
    [theme.breakpoints.down("md")]: {
      height: "45px",
    },
  },
  logoImg: {
    width: "100%",
    height: "100%",
  },
}));

const Login = (props) => {


  const [usuarioLogin, setUsuarioLogin] = useState({ email: "", password: "" });


/*   useEffect(() => {
    document.title = usuarioLogin.email;
  }, [usuarioLogin]); */
  // 1 mount
  // 2 despues de mount
  // 3 cuando actualizamos
  // 4 unmount

  const classes = Estilos();
  console.log("Login props", props);
  const onClickIniciarSesion = () => {
    props.history.push("/user");
  };
  const onClickCrearCuenta = () => {
    props.history.push("/account-creation");
  };
  const ingresoDeCorreo = (event) => {
    setUsuarioLogin({ ...usuarioLogin, email: event.target.value });
  };
  const ingresoContrasenia = (event) => {
    setUsuarioLogin({ ...usuarioLogin, password: event.target.value });
  };
  const iniciarSesion = () => {
    props.history.push("/user");
  };
  return (
    <div className="home-page-wrapper">
      <NavBar titulo={"Banco AEDITIP - Iniciar Sesión"} />

      <div className="login ccontainer">
        <div className="form">
          <div className={classes.logo}>
            <img className={classes.logoImg} src={logo} alt="logo-bank" />
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
            onChange={ingresoDeCorreo}
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
            id="outlined-email-input"
            label="Contraseña"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={ingresoContrasenia}
            value={usuarioLogin.password}
          />
          <Button
            style={{ margin: "4% 2%" }}
            variant="contained"
            color="primary"
            onClick={onClickIniciarSesion}
          >
            Iniciar sesión
          </Button>
          o
          <Button
            style={{ margin: "4% 2%" }}
            variant="contained"
            color="secondary"
            onClick={onClickCrearCuenta}
          >
            Crear Cuenta
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Login;
