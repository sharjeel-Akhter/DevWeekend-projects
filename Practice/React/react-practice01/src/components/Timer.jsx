import React, { useRef } from 'react';

function Timer(props) {
    const  [time, setTime] = React.useState(0);
    const intervalRef = useRef(time);

    const start = () => {
        intervalRef.current = setInterval( ()=>setTime(t => t+1 ), 1000);
    }
    const stop = () => {
        clearInterval(intervalRef.current);
    }
    return (
        <div>
            <p>{time}</p>
            <button onClick={start}>Start</button><br />
            <button onClick={stop}>Stop</button>
        </div>
    );
}

export default Timer;