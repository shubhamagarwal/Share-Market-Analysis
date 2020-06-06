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
                <a href="#features">Home</a>
              </li>
              <li>
                <a href="#works">Manage Deposit</a>
              </li>
              <li>
                <a href="#cities">Refer a friend</a>
              </li>
              <li>
                <a href="#plans">Support Oliver</a>
              </li>
            </ul>
            <div>
              <h4>Overview</h4>
              <div>
                <ul className="main-nav sec-nav">
                  <li>
                    <a href="#features">Overview</a>
                  </li>
                  <li>
                    <a href="#works">Asset</a>
                  </li>
                  <li>
                    <a href="#cities">Projection</a>
                  </li>
                  <li>
                    <a href="#plans">About portfolio</a>
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
