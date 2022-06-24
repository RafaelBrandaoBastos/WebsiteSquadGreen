import {Body, Picture, Main, Interface, Form, Image, Tittle, Text, Icon} from "./Login.Styled.js"
import React from 'react'
import ButtonStyled from "../../components/Button/Button"
function Login() {
  return (
    <Body> 
      <Main>
        <Interface>
          <Tittle>Olá,</Tittle>
          <Text>Para continuar navegando de forma segura, efetue o login na rede</Text> 
          <Form>
            <ButtonStyled/>     
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
