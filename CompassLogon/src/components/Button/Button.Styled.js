import styled from "styled-components";

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  font-size: 0.75rem;
  color: #c13216;
  width: 8rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  font-family: Poppins;
  &:hover {
    cursor: pointer;
    font-size: 0.9rem;
  }
  &.logout {
    background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);
    color: white;
    grid-column: 1/2;
    grid-row: 1/3;
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    grid-column: 2/5;
    grid-row: 1/3;
  }
`;
