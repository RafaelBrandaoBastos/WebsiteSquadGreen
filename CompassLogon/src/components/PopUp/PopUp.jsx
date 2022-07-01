import {Main, Main2, Button, MSG, MainText, TextRed} from "./PopUp.Styled.js"
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const PopUp = () => {

    let navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);
    const [startCountdown, setStartCountdown] = useState(false);

  
    if (!startCountdown) {
      setStartCountdown(true);
      setInterval(() => {
        setCountdown((state) => state - 1);
      }, 1000);
    }


    function deleter(event) { 
        event.preventDefault();   
        localStorage.removeItem("userData.user")
        localStorage.removeItem("userData.password")
        window.location.reload(); 
    } 
    

    return (
        <Main>
            <MainText>Informações de login detectadas em local storage</MainText>
            <Main2>
                <MSG><TextRed>Login automatico em&nbsp;{countdown}</TextRed></MSG>
                <Button onClick = {deleter}>Deslogar</Button>
            </Main2> 
        </Main>             
    )   
}

export default PopUp;