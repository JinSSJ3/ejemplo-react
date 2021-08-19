import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
import logo from "./../../static/logo_bank.png";
const Estilos = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
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

const NavBar = (props) => {
  const { title } = props;
  const classes = Estilos();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          <div className={classes.logo}>
            <img className={classes.logoImg} src={logo} alt="logo-bank" />
          </div>
          <Typography variant="h6" className={classes.title}>
            {title || ""}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
