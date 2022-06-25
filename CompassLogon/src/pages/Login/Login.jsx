import {Body, Picture, Main, Interface, Form, Image, Tittle, Text, Icon} from "./Login.Styled.js"
import React from 'react'
import ButtonStyled from "../../components/Button/Button"
import {Input} from "../../components/Input/Input"



function Login() {

  return (
    <Body> 
      <Main>
        <Interface>
          <Tittle>Olá,</Tittle>
          <Text>Para continuar navegando de forma segura, efetue o login na rede</Text> 
          <Form onSubmit={handleSubmit(validation)}>
            <Input type="text" id="User" placeholder="Usuário" />
            <Input type="password" id="Password" placeholder="Senha" />
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
