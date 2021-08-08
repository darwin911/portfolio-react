import { Divider, ListItem, ListItemText } from '@material-ui/core';

import { Link } from 'react-scroll';
import React from 'react';
import { styles } from './styles';

interface Props {
  section: string;
  setIsOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

export const NavItem: React.FC<Props> = ({ section, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen((prevVal) => !prevVal);
  };
  return (
    <Link
      onClick={toggleMenu}
      activeClass='active'
      to={section.toLowerCase()}
      smooth={true}
      duration={500}
      offset={-64}>
      <ListItem button>
        <ListItemText
          primary={section}
          style={styles.ListItemText}
          disableTypography
        />
      </ListItem>
      <Divider style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
    </Link>
  );
};
