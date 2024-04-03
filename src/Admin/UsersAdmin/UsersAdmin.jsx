
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UsersAdmin = () => {
  const [data,setData] = useState([''])

  useEffect(() => {

    const fetchUser = async () => {
      try{
           const userData = await axios.get("http://localhost:8080/api/v1/user/")
           console.log('userdata',userData)
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
      <>
      <p>{item.name}</p>
      <p>{item.email}</p>
      <p>{item.password}</p>
      </>
     ))}
    </div>
  )
}

export default UsersAdmin
