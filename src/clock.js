import React, { useEffect, useState } from "react";

const Clock = () => {

  const [time, setTime] = useState(new Date());

  const formatted = ()=>{
    let hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();

    return `${hours}:${minutes}:${seconds}`
  }


  useEffect(()=>{
    const timeInterval = setInterval(()=>{
      setTime(new Date())
    }, 1000)

    return ()=> clearInterval(timeInterval);
  }, [])

 return (
  <div className="container">
    <div className="clock">
      <p>{formatted()}</p>
    </div>
    <img src="/cat.png" alt="cat" />
  </div>
 );
};
export default Clock;