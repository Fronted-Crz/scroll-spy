import React from 'react';

import './navegation.css';

import ScrollSpy from 'react-scrollspy-navigation';

export function Navigation() {
  return (
    <nav>
      <ScrollSpy>
        <a href="#box-1" className="nav" ref={React.createRef()}>
          Home
        </a>

        <a href="#box-2" className="nav" ref={React.createRef()}>
          Contact
        </a>

        <a href="#box-3" className="nav" ref={React.createRef()}>
          About
        </a>
      </ScrollSpy>
    </nav>
  );
}
