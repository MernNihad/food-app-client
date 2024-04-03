import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Hotel.css'

const ViewHotel = () => {

  const [data,setData] = useState([''])

  useEffect(() => {

    const fetchHotel = async () => {
      try{
           const hotelData = await axios.get("http://localhost:8080/api/v1/hotel/")
           console.log('hoteldata',hotelData)
           setData(hotelData.data)
      }catch(error){
        console.log(error);
      }
    }
    fetchHotel()
    
  },[])


  return (
    <div>

      <div className='gridview'>
      {data.map((item,index) => (
      <div className='box'>
      <p>{item.name}</p>
      <p>{item.email}</p>
      <p>{item.location}</p>
      <p>{item.number}</p>
      </div>
     ))}  
     </div>

    </div>
  )
}

export default ViewHotel
