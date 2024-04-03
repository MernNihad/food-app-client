import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [Data,setData] = useState('')

  let HandleSubmit = async(e) => {
    e.preventDefault()
    try{

    }catch(error){
      console.log(error);
    }
  }

  let HandleChange = (e) => {
    setData({...Data,[e.target.name]:e.target.value})
  }
  console.log(Data);

  return (
    <section className='contactpg'>
    <div id='contact'>
      <i><b><p className='con'>CONTACT US</p></b></i>
      <span className='cop'>Please fill out the form below to discuss more plans</span>
      <form className='coform' onSubmit={HandleSubmit}>
         <input type='text' onChange={HandleChange} className='coname' placeholder='Your Name' name='name' />
         <input type='email' onChange={HandleChange} className='comail' placeholder='Your Email' name='Email' />
         <textarea onChange={HandleChange} className='comsg' rows={5} placeholder='Your Message' name='message'/><br/>
         <button className='conbtn'>Submit</button><br/><br/>

         {/* <div className='coimg'>
          <img src={fb} alt="fb" className='social'/>
          <img src={twitter} alt="twitter" className='social'/>
          <img src={utube} alt="utube" className='social'/>
          <img src={insta} alt="insta" className='social'/>
         </div> */}
      </form>
    </div>
    </section>
  )
}

export default Contact
