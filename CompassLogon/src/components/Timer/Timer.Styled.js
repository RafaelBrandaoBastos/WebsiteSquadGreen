import styled from "styled-components";
export const Time = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vh;
  margin-right: 5vh;
  line-height: 1;

  text-align: center;
  @media (max-width: 768px) {
    display: none;
    margin: 0;
  }
`;

export const TimerH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;
export const TimerP = styled.h1`
  font-size: 0.8rem;
  font-weight: 400;
`;
