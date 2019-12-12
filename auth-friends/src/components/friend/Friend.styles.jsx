import styled from "styled-components";

import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  setBorder
} from "../../globals/styles";

// export const FriendContainer = styled.div`
//   border: 1px solid #d1d1d1;
//   margin: 5% auto;
//   width: 80vw;
//   h3 {
//     padding: 5%;
//   }
//   p {
//     /* font-size: 1.6rem; */
//     margin: 10%;
//   }
// `;

export const FriendContainer = styled.div`
  border: 1px solid #d1d1d1;
  margin: 5% auto;
  width: 90%;
  min-height: 250px;
  color: #d1d1d1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

export default styled(FriendContainer)`
  background: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;

  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }
`;

export const Card = styled.div`
  padding: ${setRem()};
  h4 {
    text-transform: capitalize;
    ${setLetterSpacing()};
  }
  p {
    ${setLetterSpacing()};
    font-size: 1rem;
  }
`;
