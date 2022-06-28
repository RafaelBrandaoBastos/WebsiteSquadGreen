import React from "react";
import {InputUser, InputPassword} from "./Input.Styled"

const Input = ({type, placeholder, register, className})=>{

  if (placeholder=="Usuário")
  return(   
  
  <InputUser type={type} placeholder={placeholder} {...register} className={className} />

  )
  if (placeholder=="Senha")
  return(
  <InputPassword type={type} placeholder={placeholder} {...register} className={className}/>

  )
};

export default Input
