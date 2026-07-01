import React, { useEffect, useRef } from 'react';

const Timer = () => {
    const usRef = useRef(0);

    useEffect(() => {
        let interval = setInterval(()=>{
            usRef.current +=1;
            console.log("Count at every Interval:", usRef.current);
        },1000)  

        return () => clearInterval(interval);
    },[])

    console.log("This will re-render Once")

    return (
        <div>
            <p>Check Console For EverySecond Tick</p>
        </div>
    );
};

export default Timer;