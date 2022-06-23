import React from "react";
import CompassHeader from "../../Assets/CompassHeader.svg";
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
          <p>Passo Fundo - RS</p>
          <h1>22°</h1>
        </HeaderBodyWeather>
      </HeaderBody>
    </div>
  );
}

export default Header;
