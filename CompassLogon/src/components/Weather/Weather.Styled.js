import styled from "styled-components";
export const WeatherDetails = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const WeatherImage = styled.img`
  width: 5vw;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 8vw;
  }
`;

export const WeatheTemp = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  margin-left: 2vh;
`;
