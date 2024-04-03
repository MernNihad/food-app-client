import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './menulist.css';

const OrderMenu = () => {
  const [data, setData] = useState([]);

  // Define checkouthandler function
  const checkouthandler = (price) => {
    // Handle checkout logic here
    console.log('Checkout clicked for price:', price);
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
            {/* Pass checkouthandler function to onClick event */}
            <button onClick={() => checkouthandler(item.productInfo.price)}>Order Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderMenu;
