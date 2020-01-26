import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { styles } from './styles';
import { NavItem } from './NavItem';
import { AnimatePresence, motion } from 'framer-motion';

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);

  const sections = ['About', 'Projects', 'Contact'];

  const transitionStyles = {
    ...styles.AppBar,
    backgroundColor: `${
      isOpen ? 'rgba(50, 50, 50, 0.925)' : 'rgba(175, 175, 175, 0.65)'
    }`
  };

  return (
    <AppBar position='fixed' style={transitionStyles}>
      <Toolbar>
        <IconButton
          edge='start'
          aria-label='menu'
          color='default'
          style={{ color: 'white' }}
          disableRipple
          onClick={() => setIsOpen(prevState => !prevState)}>
          {!isOpen ? (
            <MenuIcon fontSize='large' />
          ) : (
            <CloseIcon fontSize='large' />
          )}
        </IconButton>
      </Toolbar>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            style={{ padding: 0, overflow: 'hidden' }}
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            exit={{ height: 0 }}>
            {sections.map(navItem => (
              <NavItem key={navItem} section={navItem} setIsOpen={setIsOpen} />
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </AppBar>
  );
};
