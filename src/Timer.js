import React, { useEffect } from 'react';

const Timer = ({ time, setTime, isActive, setIsActive, audioRef }) => {
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(interval);
            setIsActive(false);
            return prevTime;
          } else {
            if (prevTime === 8) {
              playSound(); // Play sound when 8 seconds remaining
            }
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, setIsActive, setTime]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <h1 style={{ color: 'orange' }}>{formatTime(time)}</h1>
      <audio ref={audioRef} src='/ticking.mp3' />
    </div>
  );
};

export default Timer;
