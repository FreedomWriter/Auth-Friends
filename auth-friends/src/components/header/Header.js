import React from "react";
import { Link } from "react-router-dom";

import Logout from "../logout/logout";

const Header = () => {
  const token = localStorage.getItem("token");

  const handleSubmit = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <ul>
        {token ? (
          <Logout handleSubmit={handleSubmit} />
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
