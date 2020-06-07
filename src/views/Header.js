import React from "react";
import "./Header.css";
import logo from "../images/Stashaway-logo.png";
import {
  HOME,
  MANAGE_DEPOSIT,
  REFER_A_FRIEND,
  SUPPORT,
  OVERVIEW,
  ASSET,
  PROJECTION,
  ABOUT_PORTFOLIO
} from '../shared/Constant';
import Hamburger from "../images/Hamburger_icon.png";


const Header = () => {
  return (
    <>
      <header>
          <div className="row">
            <div className="nav-logo">
              <img src={logo} alt="StashAway" className="stash-logo" />
                <ul className="main-nav nav-tabs">
                  <li>
                    <a href="#features">{HOME}</a>
                  </li>
                  <li>
                    <a href="#works">{MANAGE_DEPOSIT}</a>
                  </li>
                  <li>
                    <a href="#cities">{REFER_A_FRIEND}</a>
                  </li>
                  <li>
                    <a href="#plans">{SUPPORT}</a>
                  </li>
                </ul>
                <div className="hamburger-logo"><img src={Hamburger} alt="Hamburger" /></div>
            </div>
            <div>
              <ul className="main-nav sec-nav">
                <li>
                  <a href="#features" className="overview-heading">{OVERVIEW}</a>
                </li>
                <li>
                  <a href="#works">{ASSET}</a>
                </li>
                <li>
                  <a href="#cities">{PROJECTION}</a>
                </li>
                <li>
                  <a href="#plans">{ABOUT_PORTFOLIO}</a>
                </li>
              </ul>
          </div>
        </div>
        
      </header>
    </>
  );
};

export default Header;
