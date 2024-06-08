import React, { useState, useEffect } from 'react';


function clock (){
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect (() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
          }, 1000);
      
         
          return () => clearInterval(timerId);
        }, []);

        return (
        <h2>{currentTime}</h2>
        )

}

export default Clock;