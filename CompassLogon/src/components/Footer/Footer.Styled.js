import styled from "styled-components";

export const FooterBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #1c1d20;
  color: #f9f9f9;
  justify-content: space-between;
`;
export const FooterP = styled.p`
  width: 30rem;
  height: 4rem;
  border-right: 1px solid #f9f9f9;
  font-size: 0.75rem;
  line-height: 1rem;
  align-items: center;
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
  line-height: 0;
`;

export const Time = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3vh;
  margin-right: 5vh;
  line-height: 0;
  text-align: center;
`;

export const FooterButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FooterButtonsNav = styled.div`
  display: flex;
  flex-direction: column;
  color: #c13216;
  background: #ffffff;
  line-height: 0;
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
  line-height: 0;
  font-size: 0.75rem;
  width: 8rem;
  text-align: center;
  justify-content: center;
`;
