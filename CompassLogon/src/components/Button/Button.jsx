import React from "react";
import { ButtonWrapper } from "./Button.Styled";

export const Button = ({ text, className, onClick }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};
