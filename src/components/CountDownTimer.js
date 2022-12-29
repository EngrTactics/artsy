import { useState } from "react";

const CountdownTimer = ({ thr, tmin, tsec }) => {
  var totalSeconds, newTime, hrs, mins, secs;
  const [timeLeft, setTimeLeft] = useState({
    hr: thr,
    min: tmin,
    sec: tsec,
  });

  totalSeconds = timeLeft.hr * 3600 + timeLeft.min * 60 + timeLeft.sec;
  setInterval(() => {
    totalSeconds--;
    hrs = Math.floor(totalSeconds / 3600);
    mins = Math.floor((totalSeconds - hrs * 3600) / 60);
    secs = totalSeconds % 60;
    newTime = {
      hr: hrs,
      min: mins,
      sec: secs,
    };
    setTimeLeft(newTime);
  }, 1000);
  return (
    <div className="bg-gray-400 text-white min-w-full bg-opacity-50 p-5 rounded-xl border-white border-[1px]">
      {`${timeLeft.hr}hr: ${timeLeft.min}min: ${timeLeft.sec}sec`}
    </div>
  );
};

export default CountdownTimer;
