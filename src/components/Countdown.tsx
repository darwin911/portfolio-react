import React, { useEffect, useState } from "react";

import { Link } from "react-scroll";
import { motion } from "framer-motion";

export const Countdown = () => {
  const [elapsedTime, setElapsedTime] = useState<string>((0.0).toFixed(2));
  const [completed, setCompleted] = useState<boolean>(false);
  const isDebug = false;

  useEffect(() => {
    if (elapsedTime === "") return;

    if (Number(elapsedTime) > 8) {
      setCompleted(true);
      return () => clearInterval(timer);
    }

    const timer = setInterval(() => {
      setElapsedTime((prevTime: string) => (Number(prevTime) + 1).toFixed(2));
    }, 1000);

    return () => clearInterval(timer);
  }, [elapsedTime]);

  return (
    <>
      {!completed && isDebug && (
        <aside>
          <span>{elapsedTime}s</span>
        </aside>
      )}
      {Number(elapsedTime) >= 4 && (
        <Link
          to="about"
          className="hero__down-arrow"
          smooth={true}
          duration={500}
          offset={-64}
        >
          <motion.svg
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
            fill="#fff"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="3rem"
            height="3rem"
            viewBox="0 0 330.002 330.002"
          >
            <path
              id="XMLID_23_"
              d="M329.155,100.036c-2.108-6.011-7.784-10.035-14.154-10.035h-300c-6.371,0-12.046,4.024-14.154,10.035
	c-2.109,6.011-0.19,12.699,4.784,16.678l150.004,120c2.739,2.191,6.055,3.287,9.37,3.287c3.316,0,6.631-1.096,9.371-3.287
	l149.996-120C329.346,112.734,331.264,106.047,329.155,100.036z"
            />
          </motion.svg>
        </Link>
      )}
    </>
  );
};
