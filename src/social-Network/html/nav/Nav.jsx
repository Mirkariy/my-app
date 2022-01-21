/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../../css/nav/Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav">
    <div className="nav__item">
      <NavLink to="/profile">Profile</NavLink>
    </div>
    <div className="nav__item">
      <NavLink to="/messages">Messages</NavLink>
    </div>
    <div className="nav__item">
      <NavLink to="/news">News</NavLink>
    </div>
    <div className="nav__item">
      <NavLink to="/music">Music</NavLink>
    </div>
    <div className="nav__item">
      <NavLink to="/settings">Settings</NavLink>
    </div>
  </nav>
);

export default Nav;
