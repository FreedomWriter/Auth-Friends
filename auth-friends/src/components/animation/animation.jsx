import styled, { css, keyframes } from "styled-components";

//to add animations
const rotate = keyframes`
0% {
  transform: rotate(0deg)
}

50% {
  transform: rotate(360deg)
}

0% {
  transform: rotate(-360deg)
}
`;

const Animate = css`
  animation: ${rotate} 3s ease-in-out;
`;

export const AnimatedStyleComponent = styled.div`
  ${Animate}
`;
