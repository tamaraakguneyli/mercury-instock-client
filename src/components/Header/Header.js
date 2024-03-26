import React from "react";
import "../Header/Header.scss";
import logo from "../../assets/logo/InStock-Logo_2x.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__img">
          <img src={logo} alt="instock logo" className="header__logo" />
        </Link>
        <div className="header__pages">
          <NavLink to={"/warehouses"} className="header__link">
            <p className="header__page">Warehouses</p>
          </NavLink>
          <NavLink to={"/Inventory"} className="header__link">
            <p className="header__page">Inventory</p>
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
