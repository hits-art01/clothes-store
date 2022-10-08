import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import CartBlock from "../CartBlock/CartBlock";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="wrapper">
          <Link to="/" className="header__store-title">
            Store
          </Link>
        </div>
        <div className="wrapper header__cart-btn-wrapper">
          <CartBlock />
        </div>
      </div>
    </div>
  );
};

export default Header;
