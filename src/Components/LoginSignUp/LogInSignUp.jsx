import React, { useState } from 'react'
import './LogInSignUp.css';
import User_icon from '../Assets/man.png';
import Mail from  '../Assets/email.png'
import password from '../Assets/password.png'
 
    const LogIn_SignUp = () => {
        const[action ,setAction]=useState("Sign Up");
      return (
        <div className='Container'>
        <div className="header">
        <div className='text'>{action}</div>
        <div className='Uderline'></div>
        <div className="inputs">
            {action==="Login"?<div></div>: <div className="input">
            <img src={User_icon} alt=" " />
            <input type="text" placeholder="Username" />
        </div>}
       
        <div className="input">
            <img src={Mail} alt=" " />
            <input type="Email" placeholder="Email Id" />
        </div>
        <div className="input">
            <img src={password} alt=" " />
            <input type="PassWord" placeholder="Password" />
        </div>
        </div>
        </div>
         {action==="Sign Up"?<div></div>: <div className="Forgot-PassWord">Forgot PassWord? <span>Click Here!</span></div>}
       
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Log In</div>
        </div>
            </div>
      )
    
      
    }
    export default LogIn_SignUp
    
  //)
////}
//export default LogInSignUp
