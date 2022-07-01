import React from "react";
import CompassHeader from "../../Assets/CompassHeader.svg";
import Weather from "../Weather/Weather";
import { HeaderBody, HeaderImage, HeaderBodyWeather } from "./Header.Styled";
import Clock from "../Clock/Clock";

function Header() {
  return (
    <div>
      <HeaderBody>
        <HeaderImage src={CompassHeader} />
        <Clock />
        <HeaderBodyWeather>
          <Weather />
        </HeaderBodyWeather>
      </HeaderBody>
    </div>
  );
}

export default Header;
