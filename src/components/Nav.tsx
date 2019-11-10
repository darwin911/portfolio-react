import React from 'react';

export const Nav = () => {
  const isOpen = React.useState(false)[0];
  return (
    <header className='nav__header'>
      <p className='nav__brand'></p>
      <nav className={`nav__menu${isOpen ? ' is-open' : ''}`}>
        <span className='nav__togle'></span>
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
