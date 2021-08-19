import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppEjemplo from "./AppEjemplo";
import AccountCreation from "./pages/AccountCreation";
import Login from "./pages/Login";
import Usuario from "./pages/Usuario";

const MainApp = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Route
          exact
          path="/"
          component={(props) => (
            <Login {...props} title="Banco Latinoamericano AEDITIP | Login" />
          )}
        />
        <Route
          exact
          path="/user"
          component={(props) => (
            <Usuario
              {...props}
              title="Banco Latinoamericano AEDITIP | Panel de Usuario"
            />
          )}
        />
        <Route
          exact
          path="/account-creation"
          component={(props) => (
            <AccountCreation
              {...props}
              title="Banco Latinoamericano AEDITIP | Crear Cuenta"
            />
          )}
        />
        <Route
          exact
          path="/example"
          component={(props) => <AppEjemplo {...props} owner={"Jin"} />}
        />
      </BrowserRouter>
    </div>
  );
};
export default MainApp;
