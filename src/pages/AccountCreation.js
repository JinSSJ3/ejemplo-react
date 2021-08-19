import React from "react";
import "../styles/AccountCreation.scss";
import NavBar from "../components/Navegacion/NavBar";
import MainContainer from "../components/AccountCreation/MainContainer";
const AccountCreation = (props) => {
  //const [finalStage, setFinalStage] = useState(false);

  return (
    <div className="home-page-wrapper">
      <NavBar title={props.title}/>
      <div className="account-creation-container">
        <MainContainer {...props} />
      </div>
    </div>
  );
};
export default AccountCreation;
