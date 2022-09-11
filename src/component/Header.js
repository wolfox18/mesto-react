import React from "react";
import logoPath from "../images/logo-mesto.svg";

function Header() {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img
          src={logoPath}
          alt="Логотип Mesto Russia"
          className="logo__image"
        />
      </a>
    </header>
  );
}
export default Header;
