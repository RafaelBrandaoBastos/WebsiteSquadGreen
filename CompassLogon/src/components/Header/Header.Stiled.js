import styled from "styled-components";
export const HeaderBody = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;
export const HeaderImage = styled.img`
  width: 18vw;
  margin-left: 1vh;
`;
export const HeaderBodyTime = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0;
  text-align: center;
  margin: 0px;
  #headerBodyTimeText {
    font-size: 4rem;
  }
`;

export const HeaderBodyWeather = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0;
  text-align: right;
  margin-right: 4vh;
  margin-top: 2vh;
`;
