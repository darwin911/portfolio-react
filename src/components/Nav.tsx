import React from 'react';

export const Nav = () => {
  const isOpen = React.useState(false)[0];
  return (
    <header className="nav-header">
      <p className="nav-brand"></p>
      <div className="nav-toggle">
        <span></span>
      </div>
      <nav className={`nav-menu${isOpen ? ' is-open' : ''}`}>
        <a href="#about-me" className="nav-link">
          About Me
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#blog" className="nav-link">
          Blog
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </nav>
    </header>
  );
};
