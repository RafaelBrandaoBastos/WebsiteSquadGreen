import styled from "styled-components";
import CompassBackground from "../../Assets/CompassBackground.svg";
export const SucessBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 98vw;
  height: 70vh;
  font-family: Poppins;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const SucessImage = styled.div`
  background-image: url(${CompassBackground});
  width: 35vw;
  height: 65vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left bottom;
  @media (max-width: 768px) {
    width: 90vw;
    height: 65vh;
  }
`;

export const SucessContainer = styled.div`
  margin-right: 5vh;
  align-items: center;
  text-align: right;
  margin-bottom: 4vh;

  #h2 {
    color: #c12d18;
    font-weight: 700;
    font-size: 3vw;
  }
  #h1 {
    color: #c12d18;
    line-height: 4vw;
    font-weight: 700;
    font-size: 2rem;
  }
  #p {
    color: #222222;
    margin-bottom: 1vw;
    font-weight: 400;
    font-size: 1.5vw;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
