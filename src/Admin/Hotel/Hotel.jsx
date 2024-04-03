import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast, successToast } from '../../Components/Toast/toast'
import './Hotel.css'

const Hotel = () => {
    const [data,setData] = useState('')

    let HandleSubmit = async(e) => {
        e.preventDefault()
        try{
            let response = await axios.post('http://localhost:8080/api/v1/hotel/submit', data)
            console.log(response.data, 'response');
            successToast(response.data.message)
        }
        catch(error){
            console.log(error);
            // alert(error && error.response && error.response.data.message)
            errorToast(error && error.response.data.message)
        }
    }
    
    let HandleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value})
    }
    console.log(data);

  return (
    
    <div>
    <section>
    <div className='hotel'>
        {/* <img className='bg3' src={bgr} alt='bgr' /> */}
        <form onSubmit={HandleSubmit} className='reg1'>
            <b><span className='hotel'><i>Hotel</i></span></b><br/><br/>
            <div >
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Hotel Name' variant='outlined' name='name' /><br/><br/>
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Location' variant='outlined' name='location' /><br/><br/>
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Email' variant='outlined' name='email' /><br/><br/>
                <TextField className='regbox' onChange={HandleChange} id='outlined-basic' label='Phone Number' variant='outlined' name='number' /><br/><br/>
                <button className='regbtn'>Submit</button>
                <Link to={'/admin/viewhotel'}><button className='regbtn'>View</button></Link>
            </div>
        </form>
      
    </div>
    </section>
    </div>
  )
}

export default Hotel
