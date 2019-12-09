import styled from "styled-components";

import friends from "../../images/friends.jpg";

export const HeroImage = styled.div`
  min-height: ${props => (props.height ? props.height : "80vh")};
  background-image: ${props =>
      props.linGrad
        ? props.linGrad
        : "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))"},
    url(${props => (props.img ? props.img : friends)});
  background-position: ${props => (props.position ? props.position : "center")};
  background-size: ${props => (props.size ? props.size : "cover")};
  background-repeat: ${props => (props.repeat ? props.repeat : "no-repeat")};

  /* flex box and display */
  display: ${props => (props.display ? props.display : "flex")};
  flex: ${props => props.flex && props.flex};
  flex-direction: ${props => props.flexDirection && props.flexDirection};
  flex-wrap: ${props => props.flexWrap && props.flexWrap};
  flex-flow: ${props => props.flexFlow && props.flexFlow};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${props => (props.alignItems ? props.alignItems : "flex-end")};
  align-content: ${props => props.alignContent && props.alignContent};
  align-self: ${props => props.alignSelf && props.alignSelf};
  order: ${props => props.order && props.order};
  flex-grow: ${props => props.flexGrow && props.flexGrow};
  flex-shrink: ${props => props.flexShrink && props.flexShrink};
  flex-basis: ${props => props.flexBasis && props.flexBasis};
`;
