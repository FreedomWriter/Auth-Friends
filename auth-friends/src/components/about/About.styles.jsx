import styled from "styled-components";

import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media
} from "../../globals/styles";

export const AboutCenter = styled.div`
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
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
.about-img,
.about-info {
  padding: ${setRem(0)};
}
width:100vw;
max-width:1170px;
display:grid;
grid-template-columns:1fr 1fr;
grid-column-gap:${setRem(32)};
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
