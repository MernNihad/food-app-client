
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
const AdminOrders = () => {
  const [data,setData] = useState([''])

  useEffect(() => {

    const fetchUser = async () => {
      try{
           const userData = await axios.get("http://localhost:8080/api/v1/user/")
           setData(userData.data)
      }catch(error){
           console.log(error);
      }
    }
    fetchUser()
    
  },[])

  return (
    <div>
     {data.map((item,index) => (
      <div className='container'>
      <p>{item.name}</p>
      <p>{item.email}</p>
      <Link to={`/admin/order/${item._id}`}>View Orders</Link>
      </div>
     ))}
    </div>
  )
}

export default AdminOrders
