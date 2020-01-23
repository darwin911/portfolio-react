import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);
  return (
    <AppBar
      position='fixed'
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
      <Toolbar>
        <IconButton
          edge='start'
          aria-label='menu'
          onClick={() => setIsOpen(prevState => !prevState)}>
          <MenuIcon fontSize='large' />
        </IconButton>
      </Toolbar>

      {isOpen && (
        <List component='nav'>
          <ListItem button style={{ color: 'black' }}>
            <ListItemText primary='About' />
          </ListItem>
          <ListItem button style={{ color: 'black' }}>
            <ListItemText primary='Projects' />
          </ListItem>
          <ListItem button style={{ color: 'black' }}>
            <ListItemText primary='Contact' />
          </ListItem>
        </List>
      )}
    </AppBar>
  );
};
