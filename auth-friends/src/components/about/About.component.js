import React from "react";
import Section from "../../globals/Section.component";
import Title from "../../globals/Title";
import ladies from "../../images/ladies.jpeg";

import styled from "styled-components";

import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media
} from "../../globals/styles";
// import { PrimaryBtn } from "../globals/Buttons";
// import styled from "styled-components";
// import { AboutCenter } from "./About.styles";
const About = () => {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={ladies} alt="woman looking up" />
        </div>
        <div className="about-info">
          <Title title="Section Title" />
          <p>Organize the things that matter the most</p>
          {/* <PrimaryBtn>Button</PrimaryBtn> */}
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};
      color: ${setColor.primaryColor};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
  .about-img,
  .about-info {
    padding: ${setRem(0)};
    align-self: center;
  }
  width:100vw;
  max-width:1170px;
  .about-img,.about-info{
   align-self:center;
  }
  .about-info{
   p{
    width:80%;
   }
  }
  `}
`;

export default About;
