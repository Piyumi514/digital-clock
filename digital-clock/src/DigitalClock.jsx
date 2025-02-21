import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
 
  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  },[]);

  return (
    <div style={{textAlign:"center",
                alignItems:'center'}}>
                  
            <h1>Digital Clock</h1>
            <h2>{time.toLocaleTimeString()}</h2>
            
    </div>
  );
};

export default DigitalClock;