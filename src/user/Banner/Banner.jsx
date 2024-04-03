import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
import Menu from '../Menu'
import AboutUs from '../AboutUs/AboutUs'
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer'

const Banner = () => {
  return (
    <>
    <div className='banner'>
      
      <div className='mainban'>
      <p className='ban'><i>Best Food At Your Door Step</i></p>
      <Link to = '/Register'><button className='banbtn'>Join Us</button></Link>
      </div>
    </div>
    
      <Menu/>
      <AboutUs/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Banner
