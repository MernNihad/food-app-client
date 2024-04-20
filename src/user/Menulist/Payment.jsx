import React, { useEffect } from 'react';
import './menulist.css';
import { useNavigate } from 'react-router-dom';
import OrderMenu from './OrderMenu';

const Payment = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  if (!token) {
    navigate('/login');
  }

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
    // Payment logic
  };

  return (
    <div className='vh-100 d-flex justify-content-center align-content-between col'>
      <OrderMenu amount={215} checkouthandler={checkouthandler} />
    </div>
  );
};

export default Payment;