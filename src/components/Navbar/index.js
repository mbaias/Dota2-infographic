import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = () => (
  <nav className="nav">
    <h1 className="nav-brand">
      <Link className="navbar__brand navbar__link" to="/">
        Dota2 Infographic
      </Link>
    </h1>
    <ul className="navbar">
      <li className="navbar__item">
        <NavLink
          to="/teams"
          className="navbar__link"
          activeClassName="active-link"
        >
          Teams
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          to="/players"
          className="navbar__link"
          activeClassName="active-link"
        >
          Players
        </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink
          to="/heroes"
          className="navbar__link"
          activeClassName="active-link"
        >
          Heroes
        </NavLink>
      </li>
    </ul>
    <div className="block" />
  </nav>
);

export default Navbar;
