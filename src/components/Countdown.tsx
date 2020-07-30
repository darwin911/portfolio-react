import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-scroll';

export const Countdown = () => {
  const [elapsedTime, setElapsedTime] = useState<string>((0.0).toFixed(2));
  const [completed, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (elapsedTime === '') return;

    if (Number(elapsedTime) > 15) {
      setCompleted(true);
      return () => clearInterval(timer);
    }

    const timer = setInterval(() => {
      setElapsedTime((prevTime: string) => (Number(prevTime) + 0.075).toFixed(2));
    }, 75);

    return () => clearInterval(timer);
  }, [elapsedTime]);

  const showMessage = Number(elapsedTime) >= 5;
  return (
    <>
      {!completed && (
        <aside>
          <span>{elapsedTime}s</span>
          {showMessage && (
            <p>
              <small>This is how long you've been here.</small>
            </p>
          )}
        </aside>
      )}
      {Number(elapsedTime) > 10 && (
        <Link to='about' className='hero__down-arrow' smooth={true} duration={500} offset={-64}>
          <svg
            fill='#fff'
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            x='0px'
            y='0px'
            width='3rem'
            height='3rem'
            viewBox='0 0 330.002 330.002'>
            <path
              id='XMLID_23_'
              d='M329.155,100.036c-2.108-6.011-7.784-10.035-14.154-10.035h-300c-6.371,0-12.046,4.024-14.154,10.035
	c-2.109,6.011-0.19,12.699,4.784,16.678l150.004,120c2.739,2.191,6.055,3.287,9.37,3.287c3.316,0,6.631-1.096,9.371-3.287
	l149.996-120C329.346,112.734,331.264,106.047,329.155,100.036z'
            />
          </svg>
        </Link>
      )}
    </>
  );
};
