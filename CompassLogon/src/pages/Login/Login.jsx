import {Body, Picture, Main, ContainerIcon, Interface, Form, Image, Tittle, Text, Icon} from "./Login.Styled.js"
import React from 'react'
import ButtonStyled from "../../components/Button/Button"
import Input from "../../components/Input/Input"
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().matches(/^[a-z0-9._-]+(?:\.[a-z0-9._-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?.)+[a-z](?:[a-z]*[a-z]){1,}?$/).required(),
  password: yup.string().matches(/^[0-9]{6,9}$/).required(),
}).required();


function Login() {
const { register, handleSubmit, formState: { errors } } =  useForm({
  resolver: yupResolver(schema)
});
let navigate = useNavigate();

function validation(userData) {
  console.log(userData);
  navigate('/sucess');
}
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
            <Input type="text" name="user" placeholder="Usuário" register={register} errors={errors}/>
            <Input type="password" name="password" placeholder="Senha" register={register} errors={errors}/>        
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
