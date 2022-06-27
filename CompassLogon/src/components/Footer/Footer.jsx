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
import Timer from "../Timer/Timer";
const COUNTDOWN = 600;

function Footer() {
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
          <Timer />
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
