import React, { useState,useEffect } from "react";
import { format,addSeconds } from "date-fns";

const Counter = () => {
    const [time,setTime] = useState(new Date(0,0,0,0,0,0,0)); // 00:00:00
    const [isRunnin,setIsRunnin] = useState(true)

    useEffect(()=>{
        if(isRunnin){
        const intervalId = setInterval(()=>{
            setTime(time=>addSeconds(time, 9))
        },1000);

        return ()=>{
            clearInterval(intervalId);
        }}
    },[isRunnin])

    const switchRunning = ()=>{
        setIsRunnin(!isRunnin)
    }

    const clearRunning = ()=>{
        setTime(new Date(0,0,0,0,0,0,0));
        
    }

    return (
        <>
          <h1>{format(time,'HH:mm:ss')}</h1>  
          <button onClick={switchRunning}>{isRunnin ? 'Stop': 'Start'}</button>
          <button onClick={clearRunning} disabled={isRunnin === false ? null:'false'}>Clear</button>
        </>
    );
}

export default Counter;
