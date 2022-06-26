import React from "react";
import {InputUser, ContainerInput, InputPassword, Label, ErrorMessage} from "./Input.Styled"

const Input = (props)=>{
 
  if (props.placeholder=="Usuário")
  return(   
  <>
  <Label htmlFor={props.id}>Login</Label>
  <InputUser type={props.type} name={props.name} placeholder={props.placeholder}  {...props.register(props.name, {required: true})} />
  </>  
  )
  if (props.placeholder=="Senha")
  return(
  <ContainerInput>
  <InputPassword type={props.type} name={props.name} placeholder={props.placeholder} {...props.register(props.name, {required: true})} />
  {props.errors.password && <ErrorMessage>Ops, usuário ou senha inválidos.<br/>Tente novamente!</ErrorMessage>} 
  </ContainerInput>
  )
};

export default Input
