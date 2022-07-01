import { Container401, Section401, Displayed401 } from "./ErrorPage401.Styled";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Sucess from "../../Sucess/Sucess";

export default function ErrorPage401(props) {
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(5);
  const [startCountdown, setStartCountdown] = useState(false);

  if (!startCountdown) {
    setStartCountdown(true);
    setInterval(() => {
      setCountdown((state) => state - 1);
    }, 1000);
  }

  const login = () => {
    if (
      localStorage.getItem("userData.user") != null &&
      localStorage.getItem("userData.password") != null
    ) {
      return true;
    } else {
      setTimeout(() => {
        {
          {
            navigate("/");
          }
        }
      }, 5500);
      return false;
    }
  };

  return (
    <>
      {!login() ? (
        <Container401>
          <Section401>
            <Displayed401 src={"./src/assets/error401.png"} />
            <p>Redirecting in {countdown} seconds</p>
          </Section401>
        </Container401>
      ) : (
        <Sucess />
      )}
    </>
  );
}
