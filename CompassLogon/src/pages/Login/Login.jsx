import {Body, Picture, Main, ContainerIcon, Interface, Form, Image, Tittle, Text, Icon} from "./Login.Styled.js"
import React, {useState, useEffect} from "react";
import ButtonStyled from "../../components/Button/Button"
import {ErrorMessage, Label, ContainerInput} from "../../components/Input/Input.Styled"
import Input from "../../components/Input/Input"
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"


function Login() {
const { register, handleSubmit, formState: { errors } } =  useForm();
let navigate = useNavigate();

function validation(userData) {
  console.log(userData);
  localStorage.setItem("userData.user", userData.user);
  localStorage.setItem("userData.password", userData.password);
  navigate('/sucess');
}

  let [datauser, setDatauser] = useState(localStorage.getItem("userData.user"));
  let [datapassword, setDatapassword] = useState(localStorage.getItem("userData.password")); 
  
  const handleChangeuser = event => {
    setDatauser(event.target.value);}

  const handleChangepassword = event => {
      setDatapassword(event.target.value);}


  return (
    <Body> 
      <Main>
      <ContainerIcon>
        <Icon/>
      </ContainerIcon>
        <Interface>                                                                                          
          <Tittle>Olá,</Tittle>
          <Text>Para continuar navegando de forma segura, efetue o login na rede</Text> 
          <Form onSubmit={handleSubmit(validation)}>
            <Label htmlFor="Usuário">Login</Label>
            <Input type="text" placeholder="Usuário" inputdata = {datauser} onChange = {handleChangeuser} className={errors.password || errors.user?"invalid": " "} {...{register:register("user", {required:true, pattern: /^[a-z]{2,}[.][a-z]{2,}$/})}}/>
          <ContainerInput>
            <Input type="password" placeholder="Senha" inputdata = {datapassword} onChange = {handleChangepassword} className={errors.password || errors.user?"invalid": " "} {...{register:register("password", {required:true, pattern: /^[0-9]{6,9}$/})}} /> 
            {errors.password && <ErrorMessage>Ops, usuário ou senha inválidos.<br/>Tente novamente!</ErrorMessage> || errors.user && <ErrorMessage>Ops, usuário ou senha inválidos.<br/>Tente novamente!</ErrorMessage>}
          </ContainerInput>
            <ButtonStyled name="btn" type="Submit"/> 
          </Form>
        
        </Interface>     
      </Main>

      <Picture>    
        <Image>
          <Icon/>
        </Image>
      </Picture>

    </Body>
  )
}
export default Login; 
