import styled from "styled-components";

export const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  #headerBodyTimeText {
    font-size: 5rem;
    font-weight: 700;
    line-height: 5rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;