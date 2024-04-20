import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './menulist.css';
import { useNavigate } from 'react-router-dom';

const OrderMenu = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const id = localStorage.getItem('id');

  const checkouthandler = async (id) => {
    try {
      // Make an API call to place the order
      const response = await axios.post(`http://localhost:8080/order/${id}`, {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        }
      });
      console.log(response, 'order');
      // Redirect to the payment page after successful order placement
      navigate('/payment');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderData = await axios.get("http://localhost:8080/vieworderproduct");
        setData(orderData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOrder();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div className='box' key={index}>
          <div>
            <p><img className='imageorder' src={item.productInfo.ImageLink} alt="Product" /></p>
            <div>
              <p>{item.productInfo.name}</p>
              <p>{item.productInfo.price}</p>
              <p>{item.productInfo.hotelname}</p>
              <p>{item.userInfo.name}</p>
              <p>{item.userInfo.email}</p>
            </div>
            {/* Pass productId to checkouthandler function */}
            <button onClick={() => checkouthandler(item.productInfo.id)}>Order Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderMenu;
