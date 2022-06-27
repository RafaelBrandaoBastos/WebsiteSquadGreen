import React, { useEffect, useState } from "react";
import CompassHeader from "../../Assets/CompassHeader.svg";
import {
  HeaderBody,
  HeaderImage,
  HeaderBodyTime,
  HeaderBodyWeather,
} from "./Header.Stiled";
import axios from "axios";
function Header() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const APIkey = `7e9baf9d3c42b588e4f66011a123a6fb`;

  const fetchWeather = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data[1].country));
  };
  const weatherDetails = (info) => {
    const city = info[0].county;
    console.log(info);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords;
      console;
      // let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
      let url = `http://api.positionstack.com/v1/reverse?access_key=d98a45ec61e6bdccdf661642fd349417&query=${latitude},${longitude}`;

      console.log(url);
      fetchWeather(url);
      setLocation(true);
    });
  }, [location == true]);

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
          <h1>das</h1>
        </HeaderBodyWeather>
      </HeaderBody>
    </div>
  );
}

export default Header;
