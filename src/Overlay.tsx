import { useEffect, useState } from "react";
import "./App.css";

function Overlay1() {
  const impDate = new Date(2022, 2, 10);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const getTime = () => {
    const today = new Date();
    // @ts-ignore
    const milliseconds = today - impDate;
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  });

  return (
    <>
      {days && (
        <div className="content">
          <div className="overlay">
            <div className="font-style"> SANDHIYA MANIKANNAN</div>
            <div className="font-style uppercase">all started at</div>
            <div className="date font-style">10th MARCH 2022</div>
            <div className="been font-style">ITS BEEN</div>
            <ul>
              <li>
                <span id="days">{days}</span>days
              </li>
              <li>
                <span id="hours">{hours}</span>Hours
              </li>
              <li>
                <span id="minutes">{minutes}</span>Minutes
              </li>
              <li>
                <span id="seconds">{seconds}</span>Seconds
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Overlay1;
