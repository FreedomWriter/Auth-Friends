import React from "react";

import Hero from "../../components/hero-image/Hero.component";
import Banner from "../../components/banner/Banner.component";
import About from "../../components/about/About.component";

function MarketingPage() {
  return (
    <div>
      <Hero>
        <Banner />
      </Hero>
      <About />
    </div>
  );
}

export default MarketingPage;
