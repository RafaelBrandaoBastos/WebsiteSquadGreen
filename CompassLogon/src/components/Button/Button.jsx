import React from 'react'
import { useState, useEffect } from "react";
import {ButtonStyled} from'./Button.Styled.js'
import { useNavigate } from "react-router-dom";


const Button = () => {

    return (
        <ButtonStyled name = "continue" type = "submit">Continuar</ButtonStyled>       
    )   
}

export default Button;