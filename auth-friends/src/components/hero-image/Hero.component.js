import React from "react";
import { withRouter } from "react-router-dom";

import { CustomLink, CustomLinkContainer } from "../custom-link/link.styles";
import { HeroImage } from "./hero.styles";
import Banner from "../banner/Banner.component";

function Hero({ location }) {
  console.log(`Hero.component.js: location.pathname: `, location.pathname);
  const urlPath = location.pathname;
  return (
    <>
      <HeroImage>
        <Banner title="finding friends">
          <CustomLinkContainer flexFlow="row nowrap">
            {urlPath === "/signup" ? (
              <>
                <CustomLink
                  background="rgb(20, 20, 20, 0.9)"
                  fontSize="1.2rem"
                  to="/login"
                >
                  login
                </CustomLink>
                <CustomLink
                  background="rgb(20, 20, 20, 0.9)"
                  fontSize="1.2rem"
                  to="/"
                >
                  Back
                </CustomLink>{" "}
              </>
            ) : urlPath === "/login" ? (
              <>
                <CustomLink
                  background="rgb(20, 20, 20, 0.9)"
                  fontSize="1.2rem"
                  to="/signup"
                >
                  Sign Up
                </CustomLink>
                <CustomLink
                  background="rgb(20, 20, 20, 0.9)"
                  fontSize="1.2rem"
                  to="/"
                >
                  Back
                </CustomLink>{" "}
              </>
            ) : (
              <>
                <CustomLink
                  background="rgb(20, 20, 20, 0.9)"
                  fontSize="1.2rem"
                  to="/signup"
                >
                  sign up
                </CustomLink>
                <CustomLink
                  background="rgb(20, 20, 20, 0.9)"
                  fontSize="1.2rem"
                  to="/login"
                >
                  log in
                </CustomLink>{" "}
              </>
            )}
          </CustomLinkContainer>
        </Banner>
      </HeroImage>
    </>
  );
}

export default withRouter(Hero);

// (
//   <>
//     <CustomLink
//       background="rgb(20, 20, 20, 0.9)"
//       fontSize="1.2rem"
//       to="/login"
//     >
//       login
//     </CustomLink>
//     <CustomLink
//       background="rgb(20, 20, 20, 0.9)"
//       fontSize="1.2rem"
//       to="/signup"
//     >
//       Sign Up
//     </CustomLink>{" "}
//   </>
// )
