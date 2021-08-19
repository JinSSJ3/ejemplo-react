import React from "react";
import HomeAccount from "./AccountStatus";
import ProfileDetail from "./ProfileDetail";
import Transactions from "./Transactions";
import Transferences from "./Transferences";
const OptionSelector = (id, props) => {
  switch (id) {
    case "home":
      return <HomeAccount {...props} />;
    case "profile":
      return <ProfileDetail {...props} />;
    case "transactions":
      return <Transactions {...props} />;
    case "transferences":
      return <Transferences {...props} />;
  }
};
const MainContainerProfile = (props) => {
  const { id } = props;
  return <div>{OptionSelector(id, props)}</div>;
};
export default MainContainerProfile;
