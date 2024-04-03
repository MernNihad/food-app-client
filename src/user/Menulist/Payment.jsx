import React, { useEffect } from 'react';
import axios from 'axios';
import OrderMenu from './OrderMenu';
import './menulist.css';


const Payment = () => {
  useEffect(() => {
    const loadRazorpay = async () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        console.log('Razorpay SDK loaded');
      };
      document.body.appendChild(script);
    };
    loadRazorpay();

    return () => {
      // Cleanup if needed
    };
  }, []);

  const checkouthandler = async (amount) => {
    try {
      const response = await axios.post("http://localhost:8080/checkout", { amount });
      const { order } = response.data;

      const options = {
        key: "rzp_test_H0JW7KXTkvpj4p",
        amount: order.amount,
        currency: "INR",
        name: "food",
        description: "foodalix",
        order_id: order.id,
        callback_url: "http://localhost:8080/paymentverification",
        prefill: {
          name: "Afeee",
          email: "afee@gmail.com",
          contact: "1234567890"
        },
        notes: {
          "address": "razorpay official"
        },
        theme: {
          "color": "#3399cc"
        }
      };

      if (window.Razorpay) {
        const razor = new window.Razorpay(options);
        razor.open();
      } else {
        console.log('Razorpay SDK not loaded');
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className='vh-100 d-flex justify-content-center align-content-between col'>
      
      <OrderMenu checkouthandler={checkouthandler} />

    </div>
  );
};

export default Payment;
