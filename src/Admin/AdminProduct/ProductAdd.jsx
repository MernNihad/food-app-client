import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom' 

import FileBase64 from 'react-filebase64';
import { successToast } from '../../Components/Toast/toast';

const ProductAdd = () => {
    const [data,setData] = useState('')
    const [image,setImage] = useState('')

    

    let HandleSubmit = async(e) => {
        e.preventDefault()

        try{
            const formData = {...data,ImageLink:image}
            let response = await axios.post('http://localhost:8080/api/v1/admin/product/add-product', formData,
            {headers:{
              'Authorization' : `Bearer ${localStorage.getItem('token')}`
              }}
            )
            successToast("Product Submitted Successfully")
            console.log(response);
        }
        catch(error){
            console.log(error);
        }
    }
    
    let HandleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    console.log(data);

   
    console.log(image);

  return (
    <div>
      <section>
    <div className='product'>
        {/* <img className='bg3' src={bgr} alt='bgr' /> */}
        <form onSubmit={HandleSubmit} className='reg1'>
            <b><span className='hotel'><i>Product Add</i></span></b><br/><br/>
            <div >
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Name' variant='outlined' name='name' /><br/><br/>
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Price' variant='outlined' name='price' /><br/><br/>
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Hotel Name' variant='outlined' name='hotelname' /><br/><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FileBase64
                multiple={ false }
                onDone={ (res)=>{setImage(res.base64)} } />   <br/>             
                <button type='submit' className='regbtn'>Submit</button>
                <Link to={'/admin/viewproduct'}><button type='submit' className='regbtn'>View</button></Link>
            </div>
        </form>
      
    </div>
    </section>
    </div>
  )
}

export default ProductAdd
