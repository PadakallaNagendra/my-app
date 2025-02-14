import  { useState } from 'react'
import './LogInSignUp.css';
// import User_icon from '../Assets/man.png';
// import Mail from  '../Assets/email.png'
// import password from '../Assets/password.png'
import { FaUser,FaLock,FaEnvelope } from "react-icons/fa";


 
    const LogIn_SignUp = () => {
        const[action ,setAction]=useState('');
        const registerLink=()=>{
            setAction('active1')
           // setAction('')
        }
        const loginLink=()=>{
            setAction('')
        }
      return (
        <div className={`wrapper${action}`}>
        <div className="form-box login">
           <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text"
               placeholder="Username" required />
               <FaUser  className='icon'/>
            </div>
            <div className="input-box">
              <input type="password"
               placeholder="password" required />
               <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">LogIn</button>
            <div className="register-link">
                <p>Dont't have a Account?<a href='#' onClick={registerLink}>  Register</a></p>
            </div>
           </form>
        </div>
        <div className="form-box register">
           <from action="">
            <h1>Registation</h1>
            <div className="input-box">
              <input type="text"
               placeholder="Username" required />
               <FaUser  className='icon'/>
            </div>
            <div className="input-box">
              <input type="Email"
               placeholder="Email" required />
              
               <FaEnvelope  className='icon'/>
              
            </div>
            <div className="input-box">
              <input type="password"
               placeholder="password" required />
               <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" /> I Agree to the terms & Conditions  </label>
              
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
                <p>Already have a Account?<a href='#' onClick={loginLink}> Login</a></p>
            </div>
           </from>
        </div>
        </div>

        // <div className='Container'>
        // <div className="header">
        // <div className='text'>{action}</div>
        // <div className='Uderline'></div>
        // <div className="inputs">
        //     {action==="Login"?<div></div>: <div className="input">
        //     <img src={User_icon} alt=" " />
        //     <input type="text" placeholder="Username" />
        // </div>}
       
        // <div className="input">
        //     <img src={Mail} alt=" " />
        //     <input type="Email" placeholder="Email Id" />
        // </div>
        // <div className="input">
        //     <img src={password} alt=" " />
        //     <input type="PassWord" placeholder="Password" />
        // </div>
        // </div>
        // </div>
        //  {action==="Sign Up"?<div></div>: <div className="Forgot-PassWord">Forgot PassWord? <span>Click Here!</span></div>}
       
        // <div className="submit-container">
        //     <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        //     <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Log In</div>
        // </div>
        //     </div>
      );
    
      
    };
    export default LogIn_SignUp
    
  //)
////}
//export default LogInSignUp
