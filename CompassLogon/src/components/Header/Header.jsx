import React, { useState, useEffect } from "react";
import CompassHeader from "../../Assets/CompassHeader.svg";
import Weather from "../Weather/Weather";
import {
  HeaderBody,
  HeaderImage,
  HeaderBodyTime,
  HeaderBodyWeather,
} from "./Header.Stiled";

function Header() {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [weekDay, setWeekDay] = useState();
  const [monthString, setMonthString] = useState();
  const [time, setTime] = useState();
  const [clockState, setClockState] = useState();
  const [clock, setClock] = useState(false);

  const getDate = () => {
    const today = new Date();
    setYear(today.getFullYear());
    setMonth(today.getMonth() + 1);
    getMonth(month);
    setDay(today.getDate());
    let currentDay = today.getDay();
    getWeekDay(currentDay);
    console.log(weekDay);
    console.log(day, month, year);
  };
  const getWeekDay = (week) => {
    switch (week) {
      case 0:
        setWeekDay("Domingo");
        break;
      case 1:
        setWeekDay("Segunda-feira");
        break;
      case 2:
        setWeekDay("Terça-feira");
        break;
      case 3:
        setWeekDay("Quarta-feira");
        break;
      case 4:
        setWeekDay("Quinta-feira");
        break;
      case 5:
        setWeekDay("Sexta-feira");
        break;
      case 6:
        setWeekDay("Sábado");
        break;
    }
  };
  const getMonth = (month) => {
    switch (month) {
      case 1:
        setMonthString("Janeiro");
        break;
      case 2:
        setMonthString("Fevereiro");
        break;
      case 3:
        setMonthString("Março");
        break;
      case 4:
        setMonthString("Abril");
        break;
      case 5:
        setMonthString("Maio");
        break;
      case 6:
        setMonthString("Junho");
        break;
      case 7:
        setMonthString("Julho");
        break;
      case 8:
        setMonthString("Agosto");
        break;
      case 9:
        setMonthString("Setembro");
        break;
      case 10:
        setMonthString("Outubro");
        break;
      case 11:
        setMonthString("Novembro");
        break;
      case 12:
        setMonthString("Dezembro");
        break;
    }
  };
  useEffect(() => {
    getDate();
  }, [day]);
  useEffect(() => {
    setTimeout(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString());
      if (!time) {
        return;
      }
      setClockState(time.substring(0, 5));
      setClock(true);
    }, 1000);
  }, [time]);

  return (
    <div>
      <HeaderBody>
        <HeaderImage src={CompassHeader} />
        {!clock ? (
          <div>Carregando...</div>
        ) : (
          <HeaderBodyTime>
            <h1 id="headerBodyTimeText">{clockState}</h1>
            <p>
              {weekDay}, {day} de {monthString} de {year}
            </p>
          </HeaderBodyTime>
        )}

        <HeaderBodyWeather>
          <Weather />
        </HeaderBodyWeather>
      </HeaderBody>
    </div>
  );
}

export default Header;
