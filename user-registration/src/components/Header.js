// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Shitr</h1>
      <nav>
        <ul>
          <li><Link to="/registration">Register as a shitr user</Link></li>
          <li><Link to="/create-post">Create a Post</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;