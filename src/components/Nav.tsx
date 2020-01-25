import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { AppBar, IconButton, Toolbar, List } from '@material-ui/core';
import { styles } from './styles';
import { NavItem } from './NavItem';

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);

  const sections = ['About', 'Projects', 'Contact'];

  const transitionStyles = {
    ...styles.AppBar,
    backgroundColor: `${
      isOpen ? 'rgba(110,110, 110, 0.85)' : 'rgba(175, 175, 175, 0.5)'
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
          size='small'
          disableRipple
          onClick={() => setIsOpen(prevState => !prevState)}>
          {!isOpen ? (
            <MenuIcon fontSize='large' />
          ) : (
            <CloseIcon fontSize='large' />
          )}
        </IconButton>
      </Toolbar>

      {isOpen && (
        <List component='nav' style={{ padding: 0 }}>
          {sections.map(navItem => (
            <NavItem key={navItem} section={navItem} />
          ))}
        </List>
      )}
    </AppBar>
  );
};
