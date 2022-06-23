import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FooterBody,
  FooterP,
  FooterTimer,
  Time,
  Refresh,
  FooterButtons,
  FooterButtonsNav,
  FooterButtonLogout,
} from "../../components/Footer/Footer.Styled";
import axios from "axios";
const COUNTDOWN = 10000;

function Footer() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(COUNTDOWN);
  const [location, setLocation] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, [location == true]);
  useEffect(() => {
    if (seconds === 0) {
      console.log("end of session");
      navigate("/");
      return;
    }
    setTimeout(() => {
      setSeconds((state) => state - 1);
    }, 1000);
  }, [seconds]);
  return (
    <div>
      <FooterBody>
        <FooterP>
          <p>
            Essa janela do navegador é usada para manter sua sessão de
            autenticação ativa.
          </p>
          <p>
            Deixe-a aberta em segundo plano e abra uma nova janela para
            continuar a navegar.
          </p>
        </FooterP>
        <FooterTimer>
          <Refresh>
            <p>Application</p>
            <p>refresh in </p>
          </Refresh>
          <Time>
            <h1>{seconds}</h1>
            <p>seconds</p>
          </Time>
        </FooterTimer>
        {/* MUDAR OS BUTTONS PARA UM COMPONENTE  */}
        <FooterButtons>
          <FooterButtonsNav>
            <p>Continuar</p>
            <p>Navegando</p>
          </FooterButtonsNav>
          <FooterButtonLogout>
            <p>Logout</p>
          </FooterButtonLogout>
        </FooterButtons>
        {/* MUDAR OS BUTTONS PARA UM COMPONENTE  */}
      </FooterBody>
    </div>
  );
}

export default Footer;
