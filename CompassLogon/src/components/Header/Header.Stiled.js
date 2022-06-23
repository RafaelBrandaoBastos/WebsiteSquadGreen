import styled from "styled-components";
export const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Poppins;
  height: 18.4vh;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-items: center;
`;
export const HeaderImage = styled.img`
  width: 18vw;
  margin-left: 1vh;
  @media (max-width: 768px) {
    width: 40%;
  }
`;
export const HeaderBodyTime = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  #headerBodyTimeText {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderBodyWeather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 4vh;
  margin-top: 2vh;
`;
