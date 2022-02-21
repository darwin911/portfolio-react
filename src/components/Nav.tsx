import { AnimatePresence, motion } from "framer-motion";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import React, { useCallback, useEffect, useRef, useState } from "react";

import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { NavItem } from "./NavItem";

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const navElementRef = useRef<HTMLElement>();

  const transitionBg = {
    backgroundColor: `rgba(24, 24, 24, ${isOpen ? 0.925 : 0.95})`,
  };

  const isVisible = (elem: HTMLElement) =>
    !!elem &&
    !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length); // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js

  const outsideClickListener: (event: any) => void = useCallback(
    (event: any) => {
      // https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
      const element: HTMLElement | undefined = navElementRef.current;
      if (!element) return;
      if (!element.contains(event.target) && isVisible(element)) {
        // or use: event.target.closest(selector) === null
        if (isOpen) {
          setIsOpen(false);
          document.removeEventListener("click", outsideClickListener);
        }
      }
    },
    [isOpen]
  );

  useEffect(() => {
    if (navElementRef.current) {
      document.addEventListener("click", outsideClickListener);
    }

    return () => document.removeEventListener("click", outsideClickListener);
  }, [outsideClickListener]);

  return (
    <AppBar
      position="fixed"
      style={transitionBg}
      className="navbar"
      ref={navElementRef}
    >
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          style={{ color: "white" }}
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {!isOpen ? (
            <MenuIcon
              fontSize="large"
              aria-label="Menu"
              aria-controls="navigation"
            />
          ) : (
            <CloseIcon
              fontSize="large"
              aria-label="Menu"
              aria-controls="navigation"
            />
          )}
        </IconButton>
      </Toolbar>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            style={{ padding: 0, overflow: "hidden" }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {["About", "Projects", "Contact"].map((navItem) => (
              <NavItem key={navItem} section={navItem} setIsOpen={setIsOpen} />
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </AppBar>
  );
};
