import React from "react";
import CompassHeader from "../../Assets/CompassHeader.svg";
import Weather from "../Weather/Weather";
import {
  HeaderBody,
  HeaderImage,
  HeaderBodyTime,
  HeaderBodyWeather,
} from "./Header.Stiled";

function Header() {
  return (
    <div>
      <HeaderBody>
        <HeaderImage src={CompassHeader} />
        <HeaderBodyTime>
          <h1 id="headerBodyTimeText">11:26</h1>
          <p>terça-feira, 17 de março de 2020</p>
        </HeaderBodyTime>
        <HeaderBodyWeather>
          <Weather />
        </HeaderBodyWeather>
      </HeaderBody>
    </div>
  );
}

export default Header;
