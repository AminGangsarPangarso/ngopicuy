import React from 'react';
import { navlink } from '../data/index';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <nav>
      <div className="nav">
        <img src={Logo} alt="logo" />
        <div>
          {navlink.map((link) => (
            <Link 
              key={link.id} 
              to={link.path} 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div>
          <Link to="/signin" className="sign-in">Sign In</Link>
          <Link to="/signup" className="sign-up">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
