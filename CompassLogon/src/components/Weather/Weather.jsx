import React, { useEffect, useState } from "react";
import { WeatherImage, WeatherDetails, WeatheTemp } from "./Weather.Styled";
function Weather() {
  const [location, setLocation] = useState(false);
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState("");
  const [weather, setWeather] = useState(false);
  const APIkey = `7e9baf9d3c42b588e4f66011a123a6fb`;

  const fetchWeather = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => weatherDetails(data));
  };
  const weatherDetails = (info) => {
    setIcon(
      `http://openweathermap.org/img/wn/${info.current.weather[0].icon}@2x.png`
    );
    setTemp((info.current.temp - 273).toFixed(0));
    console.log(info);
  };
  const fetchCity = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => cityDetails(data));
  };
  const cityDetails = (info) => {
    setCity(info.data[0].locality);
    setStates(info.data[0].region_code);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let { latitude, longitude } = position.coords;
      console;
      let urlWeather = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${APIkey}`;
      let urlCity = `http://api.positionstack.com/v1/reverse?access_key=d98a45ec61e6bdccdf661642fd349417&query=${latitude},${longitude}&limit1`;
      fetchCity(urlCity);
      fetchWeather(urlWeather);
      setLocation(true);
    });
  }, [location == true]);
  const icons = ``;
  return (
    <div>
      <p>
        {city} - {states}
      </p>
      <WeatherDetails>
        <WeatherImage src={icon} />
        <WeatheTemp>{temp}°</WeatheTemp>
      </WeatherDetails>
    </div>
  );
}

export default Weather;
