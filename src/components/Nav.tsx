import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { AppBar, IconButton, Toolbar, List } from '@material-ui/core';
import { styles } from './styles';
import { NavItem } from './NavItem';

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);

  const sections = ['About', 'Projects', 'Contact'];

  return (
    <AppBar position='fixed' style={styles.AppBar}>
      <Toolbar>
        <IconButton
          edge='start'
          aria-label='menu'
          color='default'
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
        <List component='nav'>
          {sections.map(navItem => (
            <NavItem key={navItem} section={navItem} />
          ))}
        </List>
      )}
    </AppBar>
  );
};
