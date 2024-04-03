import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Adminsidebar.css'


const AdminSideBar = () => {
  
  const navigate = useNavigate()

  let HandleLogOut = async (e) => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className='Adminbar'>
      {/* <Link to={'/admin/adminprofile'} className='sidebutton'>
            <button className='barbtn'>Profile</button>
      </Link><br/> */}


      <Link to={'/admin/user'} className='sidebutton'>
            <button className='barbtn'>User</button>
      </Link><br/>

      <Link to={'/admin/hotel'} className='sidebutton'>
            <button className='barbtn'>Hotel</button>
      </Link><br/>

      <Link to={'/admin/product'} className='sidebutton'>
            <button className='barbtn'>Product</button>
      </Link><br/>

      <Link to={'/admin/order'} className='sidebutton'>
            <button className='barbtn'>Order</button>
      </Link><br/>

      <Link to={'/'} className='sidebutton' >
      <button onClick={HandleLogOut} className='barbtn'>LogOut</button>
      </Link>


      
    </div>
  )
}

export default AdminSideBar
