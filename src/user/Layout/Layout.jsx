import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './logo.jpg';
import './Home.css';
import { IoMenu } from "react-icons/io5";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='background-container'>
      <nav className='navbar'>
        <img style={{ width: 55, height: 65, padding: 2 }} src={logo} alt='logo' />
        <div className='navdetail'>
          <b>
            <Link to='/' className='navdetailList'>Home</Link>
            <Link to='/menu' className='navdetailList'>Menu</Link>
            <Link to='/aboutus' className='navdetailList'>About Us</Link>
            <Link to='/contact' className='navdetailList'>Contact</Link>
          </b>
        </div>
        <div className='navbtns'>
          <Link to='/adminlogin'><button className='navbtn rounded-full'>Admin</button></Link>
          <Link to='/login'><button className='navbtn rounded-full'>Login</button></Link>
        </div>
        
        <div className='mobilenav' onClick={toggleMenu}>
          <IoMenu />
        </div>
      
      {isMenuOpen && (
        <div className='mobile-menu'>
          <Link to='/' className='mobile-menu-item' onClick={toggleMenu}>Home</Link>
          <Link to='/menu' className='mobile-menu-item' onClick={toggleMenu}>Menu</Link>
          <Link to='/aboutus' className='mobile-menu-item' onClick={toggleMenu}>About Us</Link>
          <Link to='/contact' className='mobile-menu-item' onClick={toggleMenu}>Contact</Link>
          <Link to='/adminlogin' className='mobile-menu-item' onClick={toggleMenu}>Admin</Link>
          <Link to='/login' className='mobile-menu-item' onClick={toggleMenu}>Login</Link>
        </div>
      )}
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
