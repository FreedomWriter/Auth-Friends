import styled from "styled-components";

export const FriendContainer = styled.div`
  border: 1px solid red;
  margin: 5% auto;
  width: 33vw;

  h3 {
    font-size: 2rem;
  }
  p {
    font-size: 1.6rem;
    margin: 2%;
  }
`;

export const CardContent = styled.div`
  border: 1px solid white;
  margin: 5% auto;
  width: 90%;
  min-height: 250px;
  color: #d1d1d1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;
