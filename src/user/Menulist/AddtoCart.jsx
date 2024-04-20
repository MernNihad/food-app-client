import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddtoCart = () => {
  const id = localStorage.getItem('id')
  const [data,setData] = useState([''])

  useEffect(() => {

     const fetchCart = async () => {
       try{
            const cartData = await axios.get(`http://localhost:8080/listCart/${id}`)
            console.log('cartdata',cartData)
            setData(cartData.data)
       }catch(error){
            console.log(error);
       }
     }
     fetchCart()
     
   },[])



  return (
    <div className='menu-containermap'>
    
     {/* {data.map((item,index) => (
       <>
       
       <div className='menulistmap'>
      <p><img className='imenu' src={item.ImageLink}/></p>
      <p className='menfon'>{item.name}</p>
      <p className='menfon'>{item.price}</p>
      <p className='menupara'>{item.hotelname}</p>
      </div>
     
        </>
     ))} */}
    </div>
  )
}

export default AddtoCart
