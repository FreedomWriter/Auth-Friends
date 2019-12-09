import styled from "styled-components";

export const BannerWrapper = styled.div`
  color: ${props => (props.color ? props.color : "#d1d1d1")};
  font-size: ${props => (props.fontSize ? props.fontSize : "6rem")};
  text-transform: ${props => (props.textAlign ? props.textAlign : "uppercase")};
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "700")};
  letter-spacing: ${props => (props.letterSpacing ? props.fontWeight : "3px")};
  h1:hover {
    color: ${props => props.hoverColor && props.hoverColor};
  }
  /* padding */
  padding: ${props => props.padding && props.padding};
  padding-top: ${props => props.paddingTop && props.paddingTop};
  padding-bottom: ${props => props.paddingBottom && props.paddingBottom};
  padding-right: ${props => props.paddingRight && props.paddingRight};
  padding-left: ${props => props.paddingLeft && props.paddingLeft};
`;
