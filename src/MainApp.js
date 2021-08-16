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
        <Route exact path="/" component={Login} />
        <Route exact path="/user" component={Usuario} />
        <Route
          exact
          path="/account-creation"
          component={(props) => <AccountCreation />}
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
