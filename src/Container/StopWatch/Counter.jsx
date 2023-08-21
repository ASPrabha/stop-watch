import React, { useEffect, useMemo, useState } from 'react';

const Counter = ({stopped, setSeconds: SetScondsProp, initialSeconds, shouldResume}) => {
    const [intervalId, setIntervalId] = useState();
    const [seconds, setSeconds] = useState(initialSeconds || 0);

    const toHoursAndMinutes = (totalSeconds) => {
        const totalMinutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return ({ h: hours, m: minutes, s: seconds });
      }
      
    useEffect(()=> {
        if(stopped) {
            SetScondsProp(seconds);
            clearInterval(intervalId)
        }
    }, [stopped]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            SetScondsProp(seconds + 1);
        }, 1000);
        setIntervalId(interval);
        return () => clearInterval(interval);
      }, [initialSeconds]);

      const time = useMemo(() =>  toHoursAndMinutes(seconds), [seconds])

      return <div>{Math.floor(time.h/10)}{Math.floor(time.h%10)}:{Math.floor(time.m/10)}{Math.floor(time.m%10)}:{Math.floor(time.s/10)}{Math.floor(time.s%10)}</div> 

}

export default Counter;