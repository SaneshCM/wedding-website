import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CountdownTimer() {
  const navigate = useNavigate();
  const targetDate = new Date("2025-04-12T10:00:00+05:30").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setTimeLeft(difference > 0 ? difference : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (ms) => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-28 text-white bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: "url('/public/background.JPG')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative flex flex-col items-center">
        <h2 className="text-lg uppercase tracking-wide font-light mb-6">Let the countdown begin</h2>
        <div className="flex flex-wrap justify-center gap-6 sm:space-x-10 mt-6 text-4xl sm:text-6xl font-semibold">
          <div className="flex flex-col items-center">
            <span className="text-5xl sm:text-7xl font-thin">{days}</span>
            <p className="mt-2 text-sm sm:text-lg tracking-wide uppercase">Days</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl sm:text-7xl font-thin">{hours}</span>
            <p className="mt-2 text-lg tracking-wide uppercase">Hours</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl sm:text-7xl font-thin">{minutes}</span>
            <p className="mt-2 text-lg tracking-wide uppercase">Minutes</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl sm:text-7xl font-thin">{seconds}</span>
            <p className="mt-2 text-lg tracking-wide uppercase">Seconds</p>
          </div>
        </div>
        {timeLeft === 0 && (
          <button href="https://drive.google.com/drive/folders/1VoNoKGUAUS_iuV0MGnvWgLISWiTUY7dT?usp=sharing"
            className="mt-8 px-8 py-4 bg-white-600 text-black rounded-lg text-lg font-semibold hover:bg-gray-300 transition border-2 border-yellow-600 hover:border-yellow-800"
            onClick={() => window.open("https://drive.google.com/drive/folders/1VoNoKGUAUS_iuV0MGnvWgLISWiTUY7dT?usp=sharing")}
          >
            Upload Photo
          </button>
        )}
      </div>
    </div>
  );
}
