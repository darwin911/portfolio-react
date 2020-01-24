import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { styles } from './styles';
import { Link, animateScroll as scroller } from 'react-scroll';

interface Props {
  section: string;
}

export const NavItem: React.FC<Props> = ({ section }) => {
  // const [target, setTarget] = React.useState();

  const sections = document.querySelectorAll('section');
  const handleClick = (ev: any) => {
    ev.preventDefault();
    console.log('handleClick', sections);
  };

  React.useEffect(() => {
    console.log('useEffect NavITem');
  }, []);

  return (
    <Link
      activeClass='active'
      to={section.toLowerCase()}
      smooth={true}
      duration={500}
      offset={0}>
      <ListItem key={section} button onClick={e => handleClick(e)}>
        <ListItemText primary={section} style={styles.ListItemText} />
      </ListItem>
    </Link>
  );
};
