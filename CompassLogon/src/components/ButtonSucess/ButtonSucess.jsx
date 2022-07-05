import React from "react";
import { ButtonWrapper } from "./ButtonSucess.Styled";

export const ButtonSucess = ({ text, className, onClick }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};
