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
import { Button } from "../Button/Button";


function Footer() {
  const [countdown, setCountdown] = useState(600);
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
          <Button text="Continuar Navegando" />
          <Button className="logout" text="Logout" />
        </FooterButtons>
        {/* MUDAR OS BUTTONS PARA UM COMPONENTE  */}
      </FooterBody>
    </div>
  );
}

export default Footer;
