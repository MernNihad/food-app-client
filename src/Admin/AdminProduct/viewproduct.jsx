import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import './viewproduct.css'
import { FaEdit } from "react-icons/fa";
import { errorToast, successToast } from '../../Components/Toast/toast';
import { Link, useNavigate } from 'react-router-dom';

const ViewProduct = () => {
    const [data,setData] = useState([''])
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {

        const fetchUser = async () => {
          try{
               const userData = await axios.get("http://localhost:8080/api/v1/userproduct/")
               setData(userData.data);
               
          }catch(error){
               console.log(error);
          }
        }
        fetchUser()
        
      },[refresh])
      console.log(data);

      let handleDelete = async (id) => {
          try{

            let response = await axios.delete(`http://localhost:8080/deleteproduct/${id}`, {headers:{
              'Authorization' : `Bearer ${localStorage.getItem("token")}`, 
            }})
            successToast("Deleted Successfully")
            setRefresh(!refresh); 
          }
          catch(error){
            errorToast(error.message)
          }
      }

      let handleEdit = async () => {
         
          try{
            // let response = await axios.put(`http://localhost:8080/update/${id}`, 
            // {headers:{
            //   'Authorization' : `Bearer ${localStorage.getItem("adminToken")}`, 
            // }})
            successToast("Edited Successfully")
            navigate('/admin/product')
            // console.log(response,'edit');
          }
          catch(error){
            errorToast(error.message)
          }
      }
  
  return (
    <div className='menu-containermap'>
        
     {data.map((item,index) => (
       <div className='menulistmap'>
       <div className="iconstyle">
        <Link to={`/admin/edit-product/${item._id}`}>
          <FaEdit size={30}/>
        </Link>
       <MdDelete onClick={()=>handleDelete(item._id)} className='icon' size={30}/>
       </div>
      <p><img alt='loading...' className='imenu' src={item.ImageLink}/></p>
      <p className='menfon'>{item.name}</p>
      <p className='menfon'>{item.price}</p>
      <p className='menupara'>{item.hotelname}</p>
      </div>
      
      
     ))}
    </div>
    
  )

}

export default ViewProduct
