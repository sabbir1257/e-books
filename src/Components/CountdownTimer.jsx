import React, { useEffect, useState } from "react";

const CountdownTimer = ({
  initialHours = 0,
  initialMinutes = 1,
  initialSeconds = 10,
}) => {
  const [totalSeconds, setTotalSeconds] = useState(
    initialHours * 3600 + initialMinutes * 60 + initialSeconds
  );

  useEffect(() => {
    if (totalSeconds <= 0) return;

    const interval = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [totalSeconds]);

  const format = (val) => String(val).padStart(2, "0");

  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  return (
    <div className="text-center mt-10 space-y-4 my-12">
      <div className=" font-bold text-white flex gap-6 justify-center ">
        <div className="bg-[#6132be] py-4 px-8 rounded-2xl grid">
          <span className="text-5xl">{format(hrs)}</span>Hours
        </div>
        <div className="bg-[#6132be] py-4 px-8 rounded-2xl grid">
          <span className="text-5xl">{format(mins)}</span> Minutes
        </div>
        <div className="bg-[#6132be] py-4 px-8 rounded-2xl grid">
          <span className="text-5xl"> {format(secs)}</span> Seconds
        </div>
      </div>
      {totalSeconds === 0 && (
        <div className="text-green-600 font-semibold">⏰ Time's up!</div>
      )}
    </div>
  );
};

export default CountdownTimer;
