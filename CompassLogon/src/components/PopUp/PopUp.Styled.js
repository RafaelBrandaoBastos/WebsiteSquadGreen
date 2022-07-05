import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: block;
  max-width: 379px;
`;
export const Main2 = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Button = styled.button`
  margin-right: 10%;
  margin: none;
  border: none;
  color: white;
  background-color: red;
  background-color: #cf2e0e;
  font-family: "Poppins";
  border-radius: 45px;
  width: 30%;
  color: white;
  font-style: Bold;
  font-size: 15px;

  &:hover {
    background-color: #f22e07;
    cursor: pointer;
  }
`;
export const MSG = styled.label`
  color: white;
  font-family: "Poppins";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  line-height: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
  }
`;
export const MainText = styled.p`
  color: white;
  font-family: "Poppins";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  line-height: 100%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const TextRed = styled.label`
  color: #cf2e0e;
`;

