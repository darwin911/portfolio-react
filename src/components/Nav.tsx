import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';

export const Nav = () => {
  const [isOpen, setIsOpen] = React.useState<Boolean>(false);
  return (
    <header className='nav__header'>
      <div className='nav__toggle-container'>
        {isOpen ? (
          <Icon
            name='times'
            id='nav__toggle'
            size='large'
            onClick={() => setIsOpen(prevVal => !prevVal)}
          />
        ) : (
          <Icon
            name='bars'
            id='nav__toggle'
            className='nav__toggle'
            size='large'
            onClick={() => setIsOpen(prevVal => !prevVal)}
          />
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
