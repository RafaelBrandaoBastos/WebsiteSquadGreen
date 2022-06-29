import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FooterBody,
  FooterP,
  FooterTimer,
  Refresh,
  FooterButtons,
} from "../../components/Footer/Footer.Styled";
import Timer from "../Timer/Timer";
import { Button } from "../Button/Button";

function Footer() {
  const [countdown, setCountdown] = useState(600);
  const [startCountdown, setStartCountdown] = useState(false);
  const navigate = useNavigate();

  if (!startCountdown) {
    setStartCountdown(true);
    setInterval(() => {
      setCountdown((state) => state - 1);
    }, 1000);
  }

  useEffect(() => {
    if (countdown === 0) {
      console.log("end of session");
      navigate("/");
      return;
    }
  }, [countdown]);
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
          <Timer countdown={countdown} />
        </FooterTimer>

        <FooterButtons>
          <Button
            className="nav"
            text="Continuar Navegando"
            onClick={(e) => {
              setCountdown(600);
              console.log(countdown);
            }}
          />
          <Button
            className="logout"
            text="Logout"
            onClick={(e) => {
              navigate("/");
            }}
          />
        </FooterButtons>
      </FooterBody>
    </div>
  );
}

export default Footer;
