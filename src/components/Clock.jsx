import React, { useState, useEffect } from 'react'
import MainClock from '../components/MainClock'

const useTime = () => {
    const [time, setTime] = useState(() => new Date());

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id)
    }, []);

  return time;
}


const ClockApp = () => {
    const time = useTime();
    return(
        <div>
            <MainClock time={time.toLocaleTimeString()} />
        </div>
    )
}

export default ClockApp