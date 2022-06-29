import styled from "styled-components";

export const FooterBody = styled.div`
  display: flex;
  font-family: Poppins;
  width: 100%;
  height: 15vh;
  background: #1c1d20;
  color: #f9f9f9;
  justify-content: space-between;
  align-items: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;
export const FooterP = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45vw;
  min-height: 5vh;
  border-right: 1px solid #f9f9f9;
  font-size: 0.8vw;
  line-height: 1rem;

  margin-right: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FooterTimer = styled.div`
  text-align: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2vh;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Refresh = styled.p`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vh;
  margin-right: 5vh;

  text-align: center;
  @media (max-width: 768px) {
    display: none;
    margin: 0;
  }
`;

export const FooterButtons = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
  }

`;

export const FooterButtonsNav = styled.div`
  display: flex;
  flex-direction: column;
  color: #c13216;
  background: #ffffff;

  font-size: 0.75rem;
  width: 8rem;
  text-align: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterButtonLogout = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);

  font-size: 0.75rem;
  width: 8rem;
  text-align: center;
  justify-content: center;
  @media (max-width: 768px) {
    order: -1;
  }
`;
