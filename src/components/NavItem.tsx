import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { styles } from './styles';
import { Link } from 'react-scroll';

interface Props {
  section: string;
}

export const NavItem: React.FC<Props> = ({ section }) => {
  return (
    <Link
      activeClass='active'
      to={section.toLowerCase()}
      smooth={true}
      duration={500}
      offset={0}>
      <ListItem key={section} button>
        <ListItemText primary={section} style={styles.ListItemText} />
      </ListItem>
    </Link>
  );
};
