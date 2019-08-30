import React from 'react';

const Nav = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <header className='nav-header'>
      <p className='nav-brand'>Darwin Smith</p>
      <div className='nav-toggle'>
        <span></span>
      </div>
      <nav className={`nav-menu${isOpen ? ' is-open' : ''}`}>
        <a href='#about-me' className='nav-link'>
          About Me
        </a>
        <a href='#projects' className='nav-link'>
          Projects
        </a>
        <a href='#contact' className='nav-link'>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Nav;
