import { AnimatePresence, motion } from "framer-motion";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import React, { useState } from "react";

import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { NavItem } from "./NavItem";

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const transitionBg = {
    backgroundColor: `rgba(24, 24, 24, ${isOpen ? 0.925 : 0.95})`,
  };

  return (
    <AppBar position="fixed" style={transitionBg} className="navbar">
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
