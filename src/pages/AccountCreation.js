import React from "react";
import MainContainer from "../components/AccountCreation/MainContainer";
import NavBar from "../components/NavBar";
import "../styles/AccCreation.scss";
const AccountCreation = (props) => {
  return (
    <div className="home-page-wrapper">
      <NavBar titulo={"Banco AEDITIP - Crear Cuenta"} />
      <div className="accouunt-creation-container">
        Creacion de cuenta
         <MainContainer {...props} />

      </div>
    </div>
  );
};
export default AccountCreation;
