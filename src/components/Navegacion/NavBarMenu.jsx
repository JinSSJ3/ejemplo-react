import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "../../static/logo_bank.png";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ProfileCard from "./ProfileCard";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(7),
  },
  logo: {
    height: "65px",

    [theme.breakpoints.down("sm")]: {
      height: "45px",
    },
  },
  logoImg: {
    width: "100%",
    height: "100%",
  },
}));
const NavBarMenu = (props) => {
  const { window, children, handleSelectedOption, handleCerrarSesion } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleCerrarSesionNavBar = () => {
    if (handleCerrarSesion) {
      handleCerrarSesion();
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <ProfileCard nombre={props.nombre}/>
      <Divider />
      <List>
        <ListItem
          button
          key={"Inicio"}
          onClick={() => {
            handleSelectedOption("home");
          }}
        >
          <ListItemIcon>
            <HomeIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={"Inicio"} />
        </ListItem>

        <ListItem
          button
          key={"Perfil"}
          onClick={() => {
            handleSelectedOption("profile");
          }}
        >
          <ListItemIcon>
            <AccountCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={"Perfil"} />
        </ListItem>

        <ListItem
          button
          key={"Transacciones"}
          onClick={() => {
            handleSelectedOption("transactions");
          }}
        >
          <ListItemIcon>
            <CreditCardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={"Transacciones"} />
        </ListItem>
        <ListItem
          button
          key={"Transferencias"}
          onClick={() => {
            handleSelectedOption("transferences");
          }}
        >
          <ListItemIcon>
            <SyncAltIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={"Transferencias"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          button
          key={"Cerrar Sesión"}
          onClick={handleCerrarSesionNavBar}
        >
          <ListItemIcon>
            <ExitToAppIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={"Cerrar Sesión"} />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <img
              className={classes.logoImg}
              src={logo}
              alt="banco-aeditip-logo"
            />
          </div>
          <Typography variant="h6" className={classes.title}>
            Banco Latinoamericano AEDITIP
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};
export default NavBarMenu;
