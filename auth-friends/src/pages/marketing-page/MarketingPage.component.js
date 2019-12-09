import React from "react";

import Hero from "../../components/hero-image/Hero.component";
import Banner from "../../components/banner/Banner.component";

function MarketingPage() {
  return (
    <div>
      <Hero>
        <Banner title="I'm a title" />
      </Hero>
    </div>
  );
}

export default MarketingPage;
