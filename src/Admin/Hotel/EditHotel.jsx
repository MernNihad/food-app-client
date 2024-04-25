import { TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { errorToast, successToast } from '../../Components/Toast/toast'
import './Hotel.css'

const EditHotel = () => {
    const [data,setData] = useState('')
    const {id } = useParams();

    let HandleSubmit = async(e) => {
        e.preventDefault()
        try{
            let response = await axios.put(`http://localhost:8080/api/v1/edit-hotel/${id}`, data)
            successToast(response.data.message)
        }
        catch (error) {
            errorToast(
              error.response.data.message || error.message || "error couured!"
            );
          }
    }

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async () => {
        try {
          const hotelData = await axios.get(`http://localhost:8080/api/v1/get-hotel/${id}`);
          setData(hotelData.data);
        } catch (error) {
            errorToast(
              error.response.data.message || error.message || "error couured!"
            );
          }
      };
    
    
    
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
                <TextField value={data.name}  className='regbox' onChange={HandleChange} id='outlined-basic' label='Hotel Name' variant='outlined' name='name' /><br/><br/>
                <TextField value={data.location}  className='regbox' onChange={HandleChange} id='outlined-basic' label='Location' variant='outlined' name='location' /><br/><br/>
                <TextField value={data.email}  className='regbox' onChange={HandleChange} id='outlined-basic' label='Email' variant='outlined' name='email' /><br/><br/>
                <TextField value={data.number}  className='regbox' onChange={HandleChange} id='outlined-basic' label='Phone Number' variant='outlined' name='number' /><br/><br/>
                <button className='regbtn' type='submit'>Submit</button>
                <Link to={'/admin/viewhotel'}><button className='regbtn'>View</button></Link>
            </div>
        </form>
      
    </div>
    </section>
    </div>
  )
}

export default EditHotel
