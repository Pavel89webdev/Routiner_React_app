import React from 'react';
import './Header.sass';

const Header = () =>
    <header
    className="header">
        <nav>
        <div className="nav-wrapper grey lighten-2">
            <a href="#" className="brand-logo center">Routiner</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="#">Link#1</a></li>
                <li><a href="#">Link#2</a></li>
                <li><a href="#">Link#3</a></li>
            </ul>
        </div>
  </nav>
    </header>

export default Header;