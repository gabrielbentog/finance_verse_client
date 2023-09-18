import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
export const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up")
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const password_confirmation = password;
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          password 
        }),
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegister = async () => {
    try {
      const data = {
        data: {
          attributes: {
            name,
            email,
            password,
            password_confirmation
          }
        }
      };
      const response = await fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      console.log(data.data)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === "Login" ? <div></div> : <div className='input'>
          <img src={user_icon} alt=""/>
          <input type='text' placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        </div>}
        
        <div className='input'>
          <img src={email_icon} alt=""/>
          <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='input'>
          <img src={password_icon} alt=""/>
          <input type='password' placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

      {action === "Sign Up" ? <div></div> : <div className='forgot-password'><span>Forgot Password</span></div>}

      <div className='submit-container'>
          <div className={action==="Login" ? "submit gray" : "submit" } onClick={()=>{
            if(action === 'Login') {
              setAction("Sign Up")
            } else {
              handleRegister();
            }
          }}>
            Sign Up
          </div>

          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={()=>{
            if (action === 'Sign Up') {
              setAction("Login")
            } else {
              handleLogin();
            }
          }}>
            Login
          </div>
      </div>
    </div>
  )
}
