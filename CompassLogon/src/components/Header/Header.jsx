import React, { useState, useEffect } from "react";
import CompassHeader from "../../Assets/CompassHeader.svg";
import Weather from "../Weather/Weather";
import {
  HeaderBody,
  HeaderImage,
  HeaderBodyTime,
  HeaderBodyWeather,
} from "./Header.Styled";
import Clock from "../Clock/Clock";

function Header() {

  const [clock, setClock] = useState(true);

  return (
    <div>
      <HeaderBody>
        <HeaderImage src={CompassHeader} />
        {!clock ? (
          <div>Carregando...</div>
        ) : (
          <Clock/>
        )}

        <HeaderBodyWeather>
          <Weather />
        </HeaderBodyWeather>
      </HeaderBody>
    </div>
  );
}

export default Header;
