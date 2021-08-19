import React, { useState } from "react";
import "../styles/Home.scss";
import NavBarMenu from "../components/Navegacion/NavBarMenu";
import "../styles/Profile.scss";
import MainContainerPage from "../components/Profile/MainContainerProfile";

const Usuario = (props) => {
  const handleCerrarSesion = () => {
    props.history.push("/");
  };
  const [idPage, setIdPage] = useState("home");

  const handleSelectedOption = (id) => {
    setIdPage(id);
  };
  return (
    <div className="home-page-wrapper">
      <div className="main-container profile">
        <NavBarMenu
          nombre={"Jorge Erasmo Montoya"}
          handleSelectedOption={handleSelectedOption}
          handleCerrarSesion={handleCerrarSesion}
        >
          <MainContainerPage id={idPage} {...props} />
         
        </NavBarMenu>
      </div>
    </div>
  );
};
export default Usuario;
