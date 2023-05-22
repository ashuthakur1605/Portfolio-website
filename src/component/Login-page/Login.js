import React from 'react'
import './Login.css'
// import Frame from './Frame.jpg'
import { Link } from "react-router-dom";
function Login() {
  window.document.title = "Login"
  return (
    <div className="Login">
      <div className="container1">
        {/* <h1>Welcome to App Name</h1> */}
        {/* <p>Get ahead of the curve. Join the next generation of health heroes.</p> */}
        {/* <div className="frame"><img src={Frame} alt="" /></div> */}
        <div className="container2">
          <h2>Sign-in to your account</h2>
          <input className='input input1' type="text" placeholder='Username' />
          <input className='input input2' type="password" placeholder='Password' />
          <select className='input input3 ' name="Select Unit Name" id="">
            <option value="Care Unit" >Care Unit</option>
            <option value="Emargency Unit ">Emargency Unit</option>
            <option value="Opd Unit ">Opd Unit</option>
          </select>
          <Link to="/SignIn"><button className='CreateUser input'>Create User</button></Link>
          <button className='button input'>Sign In</button>
        </div>
      </div>
    </div>

  )
}

export default Login