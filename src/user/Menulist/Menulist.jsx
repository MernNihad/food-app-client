import React, { useState } from 'react';
import './menulist.css'

import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { errorToast, successToast } from '../../Components/Toast/toast';

const Menulist = () => {
  const [data,setData] = useState([''])
  const value = useLocation()
  const navigate = useNavigate()

  const id = localStorage.getItem('id')

  console.log(value);

  let handleClick = async (id) => {
    try {

      let response = await axios.post(`http://localhost:8080/order/${id}`, {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
      })
      navigate('/ordermenu')
      console.log(response, 'order');
    }
    catch (err) {
      console.log(err);
      
    }
  }

  // add to cart
  const handleAddToCart = async(id____)=>{
    console.log(id____);
   
    try {
      
      
        const response = await axios.post('http://localhost:8080/addToCart',  {
            userId:id,
            productId:id____
        })
        successToast(response.data.message)

       } catch (error) {
         errorToast(error.message)
       }
}
// --------------


  return (
    <div className="menulist-container">
      <div className="menulist-item">
        <img src={value.state.ImageLink} alt="Pizza" className="item-image" />
        <div className="item-details">
          <p className="item-name">{value.state.name}</p>
          <p className="item-price">{value.state.price}</p>
          <p className="item-hotelname">{value.state.hotelname}</p>
          <p className="item-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Ostrum
            similique laudantium ipsum nisi voluptate omnis consectetur maiores<br />
            nihil, magnam dolorem laboriosam tempore modi quos. Quod, repellat
            magni.
          </p>
        </div>
        <div className="menu-buttons">
          <button className="add-to-cart-button" onClick={()=>handleAddToCart(value.state._id)}>Add to Cart</button>
          <button className="order-button" onClick={() => handleClick(value.state._id)}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};
export default Menulist;
