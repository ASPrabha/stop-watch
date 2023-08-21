import React, { useMemo, useState } from "react";
import Counter from "./Counter";
import { toHoursAndMinutes } from "../../services";
import styled from "styled-components";

const ContainerUI = styled.div`
  button {
    padding: 11px;
    text-transform: uppercase;
    font-weight: 600;
    color: #79eef2;
    background: linear-gradient(45deg, #316a95, transparent);
    border: none;
    border-radius: 13%;
    margin-right: 20px;
  }
  div {
    min-height: 100vh;
    font-size: 20vh;
  }
`;

const StopWatchContainer = () => {
  // const [time, setTime] = useState({h: 0, m: 0, s: 0});
  const [seconds, setSeconds] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setSeconds(1);
    setStarted(true);
  };

  const handleStop = () => {
    // clearInterval(intervalId);
    setStopped(true);
  };

  const handleReset = () => {
    setStopped(false);
    // setTime({ h: 0, m: 0, s: 0 });
    setSeconds(0);
    setStarted(false);
  };

  const handleResume = () => {
    setStopped(false);
    setSeconds((seconds) => seconds + 1);
  };

  const time = useMemo(() => toHoursAndMinutes(seconds), [seconds]);
  return (
    <ContainerUI>
      {seconds === 0 && (
        <button type="button" onClick={handleStart}>
          Start
        </button>
      )}
      {seconds > 0 && (
        <>
          <button type="button" onClick={stopped ? handleResume : handleStop}>
            {stopped ? "Resume" : "Stop"}
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </>
      )}
      {!started || stopped ? (
        <div>
          {Math.floor(time.h / 10)}
          {Math.floor(time.h % 10)}:{Math.floor(time.m / 10)}
          {Math.floor(time.m % 10)}:{Math.floor(time.s / 10)}
          {Math.floor(time.s % 10)}
        </div>
      ) : (
        <Counter
          stopped={stopped}
          setSeconds={setSeconds}
          initialSeconds={seconds}
        />
      )}
    </ContainerUI>
  );
};

export default StopWatchContainer;
