import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Time, TimerH1, TimerP } from "./Timer.Styled";
const COUNTDOWN = 600;
function Timer() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(COUNTDOWN);
  useEffect(() => {
    if (seconds === 0) {
      console.log("end of session");
      navigate("/");
      return;
    }
    setTimeout(() => {
      setSeconds((state) => state - 1);
    }, 1000);
  }, [seconds]);
  return (
    <div>
      <Time>
        <TimerH1>{seconds}</TimerH1>
        <TimerP>seconds</TimerP>
      </Time>
    </div>
  );
}

export default Timer;
