import React from "react";
import styled from "styled-components";
import { setRem, setFont, media, setLetterSpacing } from "../../globals/styles";

const TitleLayout = ({ className, title, center }) => {
  return <h3 className={className}>{title}</h3>;
};

export const Title = styled(TitleLayout)`
  font-size: ${setRem(36)};
  text-transform: capitalize;
  ${setLetterSpacing(5)};
  ${setFont.slanted};
  text-align: ${props => (props.center ? "center" : "left")};
`;

export const Section = styled.section`
  /* padding: ${setRem(64)} 0; */
  background: ${props => props.gray};
`;

export const CardCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  ${media.phone`
  display:grid;
  grid-template-columns:1fr 1fr;
  `};
  ${media.tablet`
  display:grid;
  grid-template-columns:1fr 1fr;
  `};
  ${media.desktop`
  width:100vw;
  max-width:1170px;
  `};
  ${media.large`
    grid-template-columns:repeat(2,1fr);
  `};
`;
