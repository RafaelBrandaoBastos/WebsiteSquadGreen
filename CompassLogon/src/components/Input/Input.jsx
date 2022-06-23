import React from "react";
import {InputStyle} from "./Input.Styled"

const Input = ({type, id, placeholder})=>{
  return(
   <InputStyle type={type} id={id} placeholder={placeholder} />
  )
};


export default Input
