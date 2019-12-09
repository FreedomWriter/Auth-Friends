import React from "react";

import { CustomLink, CustomLinkContainer } from "../custom-link/link.styles";

function Hero() {
  return (
    <CustomLinkContainer flexFlow="row nowrap">
      <CustomLink to="/login">login</CustomLink>
      <CustomLink to="/signup">Sign Up</CustomLink>
    </CustomLinkContainer>
  );
}

export default Hero;
