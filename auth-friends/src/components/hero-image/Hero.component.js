import React from "react";

import { CustomLink, CustomLinkContainer } from "../custom-link/link.styles";
import { HeroImage } from "./hero.styles";
import Banner from "../banner/Banner.component";

function Hero() {
  return (
    <>
      <HeroImage>
        <Banner title="finding friends">
          <CustomLinkContainer flexFlow="row nowrap">
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
              to="/signup"
            >
              Sign Up
            </CustomLink>
          </CustomLinkContainer>
        </Banner>
      </HeroImage>
    </>
  );
}

export default Hero;
