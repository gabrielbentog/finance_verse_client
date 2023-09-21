import React, { useState, useEffect } from 'react'
import './LoginSignup.css'
import { useNavigate } from 'react-router-dom'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
export const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up")
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const password_confirmation = password;
  const navigate = useNavigate();

  const sendRequest = async (url, method, data) => {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/${url}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const isLoggedIn = localStorage.getItem('user');

      if (isLoggedIn) {
        navigate('/home');
      }
    };

    checkAuthentication();
  }, [navigate]);


  const handleLogin = async () => {
    const data = {
      email,
      password,
    };

    try {
      const response = await sendRequest('authenticate', 'POST', data);
      if (response && response.data) {
        localStorage.setItem('user', JSON.stringify(response.data)); // Armazene o usuário no localStorage

        if (localStorage.getItem("user")) {
          navigate('/home');
        };
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleRegister = async () => {
    const data = {
      data: {
        attributes: {
          name,
          email,
          password,
          password_confirmation,
        },
      },
    };

    const response = await sendRequest('users', 'POST', data);
    console.log(response.data);
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === "Login" ? <div></div> : <div className='input'>
          <img src={user_icon} alt="" />
          <input type='text' placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        </div>}

        <div className='input'>
          <img src={email_icon} alt="" />
          <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='input'>
          <img src={password_icon} alt="" />
          <input type='password' placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>

      {action === "Sign Up" ? <div></div> : <div className='forgot-password'><span>Forgot Password</span></div>}

      <div className='submit-container'>
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {
          if (action === 'Login') {
            setAction("Sign Up")
          } else {
            handleRegister();
          }
        }}>
          Sign Up
        </div>

        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {
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
