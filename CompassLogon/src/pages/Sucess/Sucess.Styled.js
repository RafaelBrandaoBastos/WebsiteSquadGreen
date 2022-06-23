import styled from "styled-components";
import CompassBackground from "../../Assets/CompassBackground.svg";
export const SucessBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  width: 98vw;
  min-height: 68.7vh;
  font-family: Poppins;
  min-height: 33vh;
  @media screen {
    height: 100%;
  }
`;

export const SucessImage = styled.div`
  background-image: url(${CompassBackground});
  width: 35vw;
  height: 65vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left bottom;
  @media (max-width: 768px) {
    background-size: cover;
    width: 50vw;
    height: 65vh;
  }
`;

export const SucessContainer = styled.div`
  margin-right: 5vh;
  align-items: center;
  text-align: right;

  #h2 {
    color: #c12d18;
    font-weight: 700;
    font-size: 1.5rem;
  }
  #h1 {
    color: #c12d18;
    line-height: 2.5rem;
    font-weight: 700;
    font-size: 2rem;
  }
  #p {
    color: #222222;
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
