import React from "react";
import "../Header/Header.scss";
import logo from "../../assets/logo/InStock-Logo_2x.png";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={logo} alt="instock logo" className="header__logo" />
        <ul className="header__pages">
          <li className="header__link">Warehouses</li>
          <li className="header__link">Inventory</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
