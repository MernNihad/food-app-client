import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom' 

import FileBase64 from 'react-filebase64';
import { errorToast, successToast } from '../Components/Toast/toast';

const OrderAddress = () => {
    const [data,setData] = useState({})
    const { state} = useLocation()
    console.log(state,'ss')

    

    let HandleSubmit = async(e) => {
        e.preventDefault()


        try{
            const formData = {...data,total:state.total}
            console.log(formData,'formData')
            let response = await axios.post(`http://localhost:8080/api/v1/admin/product/order-address/${localStorage.getItem("user-id")}`,formData)
            successToast("Product Ordered Successfully")
        }
        catch(error){
            errorToast( error.response?.data?.message || error.message || 'error')
        }
    }
    
    let HandleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }

   

  return (
    <div>
      <section>
    <div className='product'>
        {/* <img className='bg3' src={bgr} alt='bgr' /> */}
        <form onSubmit={HandleSubmit} className='reg1'>
            <b><span className='hotel'><i>Placed </i></span></b><br/><br/>
            <div >
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Name' variant='outlined' value={data.name} name='name' /><br/><br/>
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Address' variant='outlined' name='address' value={data.address} /><br/><br/>
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Mobile Number' variant='outlined' name='number' value={data.number} /><br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                <button type='submit' className='regbtn'>Submit</button>
            </div>
        </form>
      
    </div>
    </section>
    </div>
  )
}

export default OrderAddress
