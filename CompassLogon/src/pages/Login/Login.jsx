import {Body, Picture, Main, ContainerIcon, Interface, Form, Image, Tittle, Text, Icon} from "./Login.Styled.js"
import React from 'react'
import ButtonStyled from "../../components/Button/Button"
import Input from "../../components/Input/Input"



function Login() {

  return (
    <Body> 
      <Main>
      <ContainerIcon>
        <Icon/>
      </ContainerIcon>
        <Interface>
          <Tittle>Olá,</Tittle>
          <Text>Para continuar navegando de forma segura, efetue o login na rede</Text> 
          <Form>
            <Input type="text" id="User" placeholder="Usuário" />
            <Input type="password" id="Password" placeholder="Senha" />        
          </Form>
          <ButtonStyled name="btn" type="Submit"/> 
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
