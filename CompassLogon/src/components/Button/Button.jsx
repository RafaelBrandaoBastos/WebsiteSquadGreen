import React from 'react';
import { ButtonWrapper } from './Button.Styled';

export const Button = ({text, className}) => {
   return (
      <ButtonWrapper className={className}>{text}</ButtonWrapper>

      
   )
}