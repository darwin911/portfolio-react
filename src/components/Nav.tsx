import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export const Nav = () => {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);
  return (
    <header className='nav__header'>
      <div className='nav__toggle-container'>
        {isOpen ? (
          <CloseIcon
            className='nav__toggle'
            onClick={() => setIsOpen(prevVal => !prevVal)}
          />
        ) : (
          <MenuIcon onClick={() => setIsOpen(prevVal => !prevVal)} />
        )}
      </div>
      <nav className={`nav__menu${isOpen ? ' is-open' : ''}`}>
        <a href='#about-me' className='nav__link'>
          About Me
        </a>
        <a href='#projects' className='nav__link'>
          Projects
        </a>
        <a href='#blog' className='nav__link'>
          Blog
        </a>
        <a href='#contact' className='nav__link'>
          Contact
        </a>
      </nav>
    </header>
  );
};
