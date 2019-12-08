import React from "react";

import Logout from "../logout/logout";

import { CustomLink, CustomLinkContainer } from "../custom-link/link.styles";
import { HeaderStyles } from "./Header.styles";

const Header = () => {
  const token = localStorage.getItem("token");

  const handleSubmit = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <HeaderStyles>
      <CustomLinkContainer>
        {token ? (
          <Logout handleSubmit={handleSubmit} />
        ) : (
          <>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/signup">Sign Up</CustomLink>
          </>
        )}
      </CustomLinkContainer>
    </HeaderStyles>
  );
};

export default Header;
