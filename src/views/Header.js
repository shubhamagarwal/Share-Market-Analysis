import React from "react";
import "./Header.css";
import logo from "../images/Stashaway-logo.png";
// import logo from './../logo.png';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="row">
            <img src={logo} alt="StashAway" className="stash-logo" />
            <ul className="main-nav">
              <li>
                <a href="#features">Food delivery</a>
              </li>
              <li>
                <a href="#works">How it works</a>
              </li>
              <li>
                <a href="#cities">Our cities</a>
              </li>
              <li>
                <a href="#plans">Sign up</a>
              </li>
            </ul>
            <div>
              <h4>Overview</h4>
              <div>
                <ul className="main-nav sec-nav">
                  <li>
                    <a href="#features">Food delivery</a>
                  </li>
                  <li>
                    <a href="#works">How it works</a>
                  </li>
                  <li>
                    <a href="#cities">Our cities</a>
                  </li>
                  <li>
                    <a href="#plans">Sign up</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
