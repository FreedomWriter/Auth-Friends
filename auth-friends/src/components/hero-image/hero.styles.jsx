import styled from "styled-components";

import friends from "../../images/friends.jpg";

export const HeroImage = styled.div`
  min-height: ${props => (props.height ? props.height : "80vh")};
  background-image: url(${props => (props.img ? props.img : friends)});
  background-position: ${props => (props.position ? props.position : "center")};
  background-size: ${props => (props.size ? props.size : "cover")};
  background-repeat: ${props => (props.repeat ? props.repeat : "no-repeat")};
`;
