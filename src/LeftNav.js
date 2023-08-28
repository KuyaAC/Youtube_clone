import React from "react";
import "./LeftNav.css";
import Ham from "./rsrc/hamburger.svg";

function leftnav() {
  return (
    <div className="leftnav">
      <div className="Ham-btn">
        <img className="Ham" src={Ham} alt="ham"></img>
      </div>
    </div>
  );
}

export default leftnav;
