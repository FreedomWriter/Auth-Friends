import React from "react";
import { Link } from "react-router-dom";

import Logout from "../logout/logout";

import { CustomLink, CustomLinkContainer } from "../custom-link/link.styles";

const Header = () => {
  const token = localStorage.getItem("token");

  const handleSubmit = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <CustomLinkContainer>
        {token ? (
          <Logout handleSubmit={handleSubmit} />
        ) : (
          <CustomLink to="/login">Login</CustomLink>
        )}

        <CustomLink to="/signup">Sign Up</CustomLink>
      </CustomLinkContainer>
    </div>
  );
};

export default Header;
