import styled from "styled-components";

export const FooterBody = styled.div`
  display: flex;
  font-family: Poppins;
  width: 100%;
  height: 11vh;
  background: #1c1d20;
  color: #f9f9f9;
  justify-content: space-between;
  align-items: center;
`;
export const FooterP = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45vw;
  height: 5vh;
  border-right: 1px solid #f9f9f9;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-left: 1rem;
  margin-right: 2rem;
`;

export const FooterTimer = styled.div`
  text-align: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 2vh;
`;
export const Refresh = styled.p`
  display: flex;
  flex-direction: column;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vh;
  margin-right: 5vh;

  text-align: center;
`;

export const FooterButtons = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
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
`;
