import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";

function App() {
  const [countdown, setCountdown] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const input = parseInt(e.target.value);
      const validInput = Number.isInteger(input) && input >= 0;
      const startingCountdown = validInput ? Math.floor(input) : 0;
      setCountdown(startingCountdown);
    }
  };

  useEffect(() => {
    let interval;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div className='main-div'>
         <h1 className='heading'>COUNTDOWN TIMER</h1>
      <input type="number" id="timeCount" onKeyDown={handleKeyDown} />
      <div id="current-time">Time left - {countdown}</div>
    </div>
  );
}

export default App;
