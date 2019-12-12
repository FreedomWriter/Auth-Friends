import React from "react";

import BannerWrapper from "./banner.styles";

function Banner({ title, children, ...props }) {
  return (
    <BannerWrapper paddingBottom="4rem">
      <h1>{title}</h1>
      {children}
    </BannerWrapper>
  );
}

export default Banner;
