import React from "react";

import { Time, TimerH1, TimerP } from "./Timer.Styled";

function Timer(props) {
  const { countdown } = props;
  return (
    <div>
      <Time>
        <TimerH1>{countdown}</TimerH1>
        <TimerP>seconds</TimerP>
      </Time>
    </div>
  );
}

export default Timer;
