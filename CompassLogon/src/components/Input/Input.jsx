import React from "react";
import {InputUser, InputPassword, Label} from "./Input.Styled"



const Input = (props)=>{
  
  if (props.placeholder=="Usuário")
  return(   
  <>
  <Label htmlFor={props.id}>Login</Label>
  <InputUser type={props.type} id={props.id} placeholder={props.placeholder}/>  
  </>
  )
  if (props.placeholder=="Senha")
  return(
  <InputPassword type={props.type} id={props.id} placeholder={props.placeholder}/>
  )
};


export default Input
