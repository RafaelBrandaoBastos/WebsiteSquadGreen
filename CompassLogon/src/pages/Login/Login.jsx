import React from 'react'
import {Main, Picture, Interface, Form, Image, Tittle, Text, Icon} from "./Login.Styled.js"

function Login() {
  return (
    <Main>

      <Interface>
        <Form>
          <Tittle>Olá,</Tittle>
          <Text>Para continuar navegando de forma segura, efetue o login na rede</Text>
        </Form>
      </Interface>

      <Picture>
        
        <Image>
          <Icon/>
        </Image>
      </Picture>

    </Main>
  )
}
export default Login; 
