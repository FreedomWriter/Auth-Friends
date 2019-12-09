import styled, { css } from "styled-components";

const media =
  "only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)";

export const FriendContainer = styled.div`
  border: 1px solid #d1d1d1;
  margin: 5% auto;
  width: 80vw;
  h3 {
    font-size: 2rem;
    padding: 5%;
  }
  p {
    font-size: 1.6rem;
    margin: 10%;
  }
`;

export const CardContent = styled.div`
  border: 1px solid #d1d1d1;
  margin: 5% auto;
  width: 90%;
  min-height: 250px;
  color: #d1d1d1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;
