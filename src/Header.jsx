import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">E-Commerce</Link>
      </div>
      <div className="login">
        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
