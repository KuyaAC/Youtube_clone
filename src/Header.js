import React from "react";
import "./Header.css";
import Logo from "./rsrc/logo.png";
import Magnify from "./rsrc/magnify.svg";

function Header() {
  return (
    <div className="header d-flex align-items-center ">
      <img className="youtube-logo" src={Logo} alt="youtube logo" />
      <form className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button type="submit" className="search-btn">
          <img src={Magnify} alt="magnifybtn" />
        </button>
      </form>
    </div>
  );
}

export default Header;
