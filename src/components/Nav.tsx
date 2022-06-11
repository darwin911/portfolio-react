import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { NavItem } from "./NavItem";

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const navElementRef = useRef<HTMLElement | null>(null);

  const isVisible = (elem: HTMLElement) =>
    !!elem &&
    !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length); // source (2018-03-11): https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js

  const outsideClickListener: (event: any) => void = useCallback(
    (event: any) => {
      // https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
      const element = navElementRef.current;
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
    <header
      style={{ backgroundColor: `rgba(24, 24, 24, ${isOpen ? 0.925 : 0.95})` }}
      className="navbar"
      ref={navElementRef}
    >
      <div className="navbar__wrapper">
        <button
          aria-label="Menu"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <span className={`${isOpen ? "menu-open" : "menu-closed"}`} />
        </button>
      </div>
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
    </header>
  );
};
