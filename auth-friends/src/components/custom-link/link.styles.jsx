import styled from "styled-components";
import { Link } from "react-router-dom";

//variable which can be used with template literal syntax
const btnColor = "#4d4d4d";

export const CustomLink = styled(Link)`
  margin: 2%;
  width: 10rem;
  height: 4rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${btnColor};
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
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
