import React, { useEffect, useState } from 'react'
import "./css/menu.css"
// import './viewproduct.css'
// import biri from "../user/css/biri.jpg";
// import pizza from "../user/css/pizza.jpg";
// import desserts from "../user/css/desserts.jpg";
// import fc from "../user/css/fc.jpg";
// import mandhi from "../user/css/mandhi.jpg";
// import juice from "../user/css/juice.jpg";
// import { NavLink } from 'react-router-dom'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { errorToast, successToast } from '../Components/Toast/toast';


function Menu() {
   const [data,setData] = useState([''])
   const navigate = useNavigate()

   useEffect(() => {

      const fetchUser = async () => {
        try{
             const userData = await axios.get("http://localhost:8080/api/v1/userproduct/")
             console.log('userdata',userData)
             setData(userData.data)
        }catch(error){
             console.log(error);
        }
      }
      fetchUser()
      
    },[])

    let handleCart = async (e,data) => {
      e.preventDefault()
      try{

        let response = await axios.post('http://localhost:8080/addtocart', data, {headers:{
          'Authorization' : `Bearer ${localStorage.getItem("token")}`, 
        }})
        successToast("Cart Added")
        console.log(response,'delete');
        navigate('/cart')
      }
      catch(error){
        errorToast(error.message)
      }
  }

  return (
    <>
    
   
    <div className='menu-containermap'>
    
     {data.map((item,index) => (
       <>
       <div className='menulistmap'>
       <Link to={'/menulist'} state={item}>
      <p><img className='imenu' src={item.ImageLink}/></p></Link>
      <p className='menfon'>{item.name}</p>
      <p className='menfon'>{item.price}</p>
      <p className='menupara'>{item.hotelname}</p>
      <button className='m-auto' onClick={(e)=>handleCart(e,item)}>Add To Cart</button>
      </div>
      
        </>
     ))}
    </div>
    </>
  )
}

export default Menu
