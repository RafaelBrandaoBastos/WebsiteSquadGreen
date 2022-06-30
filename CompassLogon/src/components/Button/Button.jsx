import React from "react";
import { ButtonWrapper } from "./Button.Styled";
import { useNavigate } from "react-router-dom";
export const Button = ({ text, className, onClick }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};
