import React, {useState, useEffect} from "react";
import {InputUser, InputPassword} from "./Input.Styled"


const Input = ({type, placeholder, register, className, inputdata})=>{
  
  

  if (placeholder=="Usuário")
  return(   
  
  <InputUser type={type} defaultValue={inputdata} editable={true} placeholder={placeholder} {...register} className={className} />

  )
  if (placeholder=="Senha")
  return(
  <InputPassword type={type} defaultValue={inputdata} editable={true} placeholder={placeholder} {...register} className={className}/>

  )
};

export default Input
