import React from "react";
import "./Header.css";
import Logo from "./rsrc/logo.png";
import Magnify from "./rsrc/magnify.svg";
import Vid from "./rsrc/video-plus.svg";
import Apps from "./rsrc/apps.svg";
import Bell from "./rsrc/bell.svg";

function Header() {
  return (
    <div className="NavBar">
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
            <img src={Magnify} alt="magnify-btn" />
          </button>
        </form>
        <div className="menu-icons">
          <a href="#">
            <img src={Vid} alt="Upload Video" />
          </a>
          <a href="#">
            <img src={Apps} alt="Apps" />
          </a>
          <a href="#">
            <img src={Bell} alt="Notifications" />
          </a>
          <a href="#">
            <img
              className="menu-channel-icon"
              src="http:///unsplash.it/36/36?gravity=center"
              alt="Your Channel"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
