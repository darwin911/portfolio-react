import { Link } from "react-scroll";
import React from "react";
import { motion } from "framer-motion";

export function debounce(fn: Function, ms: number) {
  let timer: any;
  return (_: any) => {
    clearTimeout(timer);
    timer = setTimeout(function (_: any) {
      timer = null;
      fn.apply(_, arguments);
    }, ms);
  };
}
// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

export const Hero: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const [innerHeight, setInnerHeight] = React.useState<number>(
    window.innerHeight
  );

  const variants = {
    visible: { opacity: 1, x: 0, y: 0 },
    hidden: { opacity: 0, x: 0, y: 20 },
  };

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      if (window.scrollY <= 5) {
        setInnerHeight(window.innerHeight);
      }
    }, 5);
    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  });

  return (
    <motion.section className="hero" animate={{ height: innerHeight }}>
      <motion.article
        className="hero__text-container"
        initial={{ opacity: 0, x: -18, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ ease: "anticipate", duration: 0.75, delay: 1.5 }}
        onAnimationComplete={() => setVisible(true)}
      >
        <h1 className="hero__title">Darwin Smith</h1>
        <motion.h2
          animate={visible ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.25, delay: 0.35 }}
          className="hero__subtitle"
        >
          Full-stack Developer
        </motion.h2>
      </motion.article>
      <Link
        to="about"
        className="hero__down-arrow"
        smooth={true}
        duration={250}
        offset={-64}
      >
        <motion.svg
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 3.5 }}
          fill="#fff"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="2.5rem"
          height="2.5rem"
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
    </motion.section>
  );
};
