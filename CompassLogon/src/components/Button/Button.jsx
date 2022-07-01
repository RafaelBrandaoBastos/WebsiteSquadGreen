import React from 'react'
import {ButtonStyled} from'./Button.Styled.js'

const Button = (props) => {

    return (
        <ButtonStyled name = {props.name} type = {props.type}>Continuar</ButtonStyled>       
    )   
}

export default Button;