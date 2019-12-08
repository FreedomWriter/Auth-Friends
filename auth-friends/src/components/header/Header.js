import React from "react";
import { withRouter } from "react-router-dom";

import Logout from "../logout/logout";

import { CustomLink, CustomLinkContainer } from "../custom-link/link.styles";
import { HeaderStyles } from "./Header.styles";

const Header = match => {
  const token = localStorage.getItem("token");

  const handleSubmit = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <HeaderStyles>
      <CustomLinkContainer>
        {token ? (
          <>
            {match.location.pathname === "/add-friend" ? (
              <CustomLink margintop="0" to="/protected">
                Back
              </CustomLink>
            ) : (
              <CustomLink margintop="0" to="/add-friend">
                Add A Friend
              </CustomLink>
            )}
            <Logout handleSubmit={handleSubmit} />
          </>
        ) : (
          <>
            {match.location.pathname === "/login" ? (
              <>
                <CustomLink margintop="0" to="/signup">
                  Sign Up
                </CustomLink>
                <CustomLink margintop="0" to="/">
                  Back
                </CustomLink>
              </>
            ) : (
              <>
                {match.location.pathname === "/signup" && (
                  <>
                    <CustomLink margintop="0" to="/login">
                      Login
                    </CustomLink>
                    <CustomLink margintop="0" to="/">
                      Back
                    </CustomLink>
                  </>
                )}
              </>
            )}
            <>
              {match.location.pathname === "/" && (
                <>
                  <CustomLink margintop="0" to="/login">
                    Login
                  </CustomLink>
                  <CustomLink margintop="0" to="/Sign Up">
                    Sign Up
                  </CustomLink>
                </>
              )}
            </>
          </>
        )}
      </CustomLinkContainer>
    </HeaderStyles>
  );
};

export default withRouter(Header);

{
  /* <>
{!token && (
  <>
    <CustomLink margintop="0" to="/login">
      Login
    </CustomLink>
    <CustomLink margintop="0" to="/Sign Up">
      Sign Up
    </CustomLink>
  </>
)}
</> */
}
