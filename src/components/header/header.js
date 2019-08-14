import React from "react";
import logo from "./logo.svg";

import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;
