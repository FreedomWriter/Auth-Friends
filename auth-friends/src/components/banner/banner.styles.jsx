import React from "react";
import styled, { css, keyframes } from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
  setFlex
} from "../../globals/styles";
const fadeIn = (start, point, end) => {
  const animation = keyframes`
0%{
 opacity:0;
 transform:translateY(${start})
}
50%{
 opacity:0.5;
 transform:translateY(${point})
}
100%{
 opacity:1;
 transform:translateY(${end})
}

`;
  return css`
    animation: ${animation} 3s ease-in-out;
  `;
};
const Banner = ({ className, title, text, children, greeting }) => {
  return (
    <div className={className}>
      <h1>
        Family <span>And Friends</span>{" "}
      </h1>
      <div className="info">
        <p>{text}</p>
        {children}
      </div>
    </div>
  );
};
const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  /* align-self: flex-end;
  margin-bottom: 10%; */
  padding: ${setRem(10)} ${setRem(10)};
  ${setLetterSpacing(3)}
  color: ${setColor.mainWhite};
  h1 {
    text-transform: capitalize;
    font-size: ${setRem(48)};
    color: hotpink;
    span {
      color: ${setColor.mainLight};
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.tablet` width: 70vw;
    ${setBorder({ width: "6px", color: setColor.gray })};
    p {
      width: 75%;
    }`}
   
  
  h1 {
   ${fadeIn("100%", "-10%", "0")}
    /* animation */
  }
  .info {
      ${fadeIn("-100%", "10%", "0")}

    /* animation */
  }
`;
export default BannerWrapper;

// import styled from "styled-components";

// export const BannerWrapper = styled.div`
//   color: ${props => (props.color ? props.color : "#d1d1d1")};
//   font-size: ${props => props.fontSize && props.fontSize};
//   text-transform: ${props => (props.textAlign ? props.textAlign : "uppercase")};
//   text-align: ${props => (props.textAlign ? props.textAlign : "center")};
//   font-weight: ${props => (props.fontWeight ? props.fontWeight : "700")};
//   letter-spacing: ${props => (props.letterSpacing ? props.fontWeight : "3px")};
//   h1:hover {
//     color: ${props => props.hoverColor && props.hoverColor};
//   }
//   /* padding */
//   padding: ${props => props.padding && props.padding};
//   padding-top: ${props => props.paddingTop && props.paddingTop};
//   padding-bottom: ${props => props.paddingBottom && props.paddingBottom};
//   padding-right: ${props => props.paddingRight && props.paddingRight};
//   padding-left: ${props => props.paddingLeft && props.paddingLeft};
// `;
