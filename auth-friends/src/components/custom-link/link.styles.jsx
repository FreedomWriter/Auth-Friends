import styled from "styled-components";
import { Link } from "react-router-dom";

//variable which can be used with template literal syntax
const bkgrndColor = "#4d4d4d";
const fontColor = "#d1d1d1";
const padding = "padding:1rem";
const margin = "margin:1rem";
const border = (size = "1px", style = "solid", color = "transparent") => {
  return `border:${size} ${style} ${color}`;
};

export const CustomLink = styled(Link)`
  ${margin};
  ${padding}
  ${border()}
  width: 10rem;
  height: 4rem;
  color: ${fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${bkgrndColor};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${fontColor};
    color: ${bkgrndColor};
  }
`;
export const CustomLinkContainer = styled.div`
  min-width: 165px;
  width: auto;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 800px) {
  }
`;
