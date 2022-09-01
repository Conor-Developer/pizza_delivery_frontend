import React from "react";
import pizzaLogo from "./pizza-logo.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header-image">
        <h1 className="title">Pizza</h1>
        <img
          id="pizza-logo"
          src={pizzaLogo}
          alt="Pizza and a fizzy drink"
        ></img>
        <h1 className="title">Parlour</h1>
      </div>
    </div>
  );
}

export default Header;
