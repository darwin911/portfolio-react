import { Countdown } from "./Countdown";
import React from "react";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";

export function debounce(fn: Function, ms: number) {
  let timer: any;
  return (_: any) => {
    clearTimeout(timer);
    timer = setTimeout(function (_) {
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
        transition={{ ease: "easeInOut", duration: 0.45, delay: 1.75 }}
        onAnimationComplete={() => setVisible(true)}
      >
        <Typography variant="h2" component="h1">
          Darwin Smith
        </Typography>
        <motion.span
          animate={visible ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.75, delay: 0.5 }}
        >
          <Typography variant="h5" component="h2">
            Full-stack Developer
          </Typography>
        </motion.span>
      </motion.article>
      <Countdown />
    </motion.section>
  );
};
