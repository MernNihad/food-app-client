import React from 'react'
import { Outlet } from 'react-router-dom'
import './AdminLayout.css'
import AdminSideBar from '../AdminSidebar/AdminSideBar'
import './AdminLayout.css'

const AdminLayout = () => {
  return (
    <div className='adlayout'>
        <AdminSideBar/>
         
          <div>
            <Outlet/>
        </div> 
        <div className='Image'>
          
        </div>
      
    </div>
  )
}

export default AdminLayout
