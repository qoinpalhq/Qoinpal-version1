import React from "react";
import loader from "./loader.module.css";
import logo from "/src/assets/logo/qoinpal2-black.svg";

function Loader() {
  return (
    <div className={loader.container}>
      <div className={loader.logo}>
        <img src={logo} />
      </div>
    </div>
  );
}

export default Loader;
