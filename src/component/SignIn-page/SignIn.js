// import React, { useState } from 'react'
import './SignIn.css'
function SignIn() {
  window.document.title = "Create User"
  // const {value,setvalue} = useState({
  //  password:'',
  //  showPassword:false 
  // })



  // const handleclickShow =() =>{
  //   setvalue({...value ,showPassword: !value.showPassword})
  // }
  return (
    <div className="SignIn">

      <div className="ccontainer">
        <h2>Create your account</h2>
        <input className='IInput Username' type="text" placeholder='Username' />
        <input className='IInput Password' type="password" placeholder='Password' />
        <input className='IInput CPassword' type="password" placeholder='Confirm Password' />
        <input className='IInput Email' type="email" placeholder='Email' />
        <button className='SignInbutton IInput'>Sumbit</button>
      </div>
    </div>

  )
}

export default SignIn