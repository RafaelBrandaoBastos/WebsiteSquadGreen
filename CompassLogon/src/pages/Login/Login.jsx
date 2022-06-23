import React from 'react'
import {Main, Picture, Interface, Form, Image, Tittle, Text} from "./Login.Styled.js"
import Notebook from "../../assets/Notebook.png"


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
        <Image src = {Notebook}/>
      </Picture>

    </Main>
  )
}
export default Login; 
