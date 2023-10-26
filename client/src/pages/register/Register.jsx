import React, { useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './Register.css'

function Register() {
    const [register, setRegister] = useState({
        username:'',
        email:'',
        password:''
    })
  const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/register",{
           headers:{
             'Content-Type':'application/json',
           },
           method:'POST', 
           body:JSON.stringify(register)
        });
        const data = await response.json();
        setRegister({
            username:'',
            email:'',
            password:''
        })
        if(data) navigate('/');
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister((prevRegister) => ({
          ...prevRegister,
          [name]: value
        }));
      };

  return (
    <div className="register-container">
        <div className='register'>
        <h1>Connect</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input type="text" value={register.username} onChange={handleChange} name='username' placeholder='Username'/>
            <label htmlFor="email"></label>
            <input type="email" value={register.email} onChange={handleChange} name='email' placeholder='Email'/>
            <label htmlFor="password"></label>
            <input type="password" value={register.password} onChange={handleChange} name='password' placeholder='Password'/>
            <button className='btn btn-primary'>Sign Up</button>
        </form>
        <p>Already have an account?<Link to={'/'}>Login</Link></p>
    </div>
    </div>
  )
}

export default Register