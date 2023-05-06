import React from "react";
import { FaCoins } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <FaCoins className="icon" />
        <h1>
          Coin <span className="purple">Search</span>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
