import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from './logo.jpg';
import './Home.css';
import { IoMenu } from "react-icons/io5";
import axios from 'axios';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [data,setData] = useState([''])

  const navigate = useNavigate();

  
  useEffect(()=>{

    if(!localStorage.getItem("user-id")){
      navigate('/Login')
    }

    if(localStorage.getItem("user-id")){
      fetchdata()
    }

  },[navigate])


  const fetchdata = async () => {
    try{
         const userData = await axios.get(`http://localhost:8080/api/v1/get-user/${localStorage.getItem("user-id")}`)
         console.log('userdata',userData)
         setData(userData.data)
    }catch(error){
         console.log(error);
    }
  }

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
            <Link to='/cart' className='navdetailList'>Cart</Link>
            <Link to='/orders' className='navdetailList'>Orders</Link>
          </b>
        </div>
        <div className='navbtns'>
        { data ? <>
        
          <Link ><button className='navbtn rounded-full'>{data.name}</button></Link>
          <Link onClick={()=>{
            localStorage.removeItem("admin-id")
            navigate('/Login')
          }} ><button className='navbtn rounded-full'>Logout</button></Link>
        </> : <>
        
        <Link to='/adminlogin'><button className='navbtn rounded-full'>Admin</button></Link>
          <Link to='/login'><button className='navbtn rounded-full'>Login</button></Link>
        </>
        }
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
