import React, { useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './register.scss'
import axios from 'axios'

function Register() {
    const [register, setRegister] = useState({
        username:'',
        email:'',
        password:''
    })
    const [err, setErr] = useState(null)
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault()
       try {
        const data = await axios.post(`${import.meta.env.VITE_SERVER_PORT_URL}/api/auth/register`,register);
        setRegister({
            username:'',
            email:'',
            password:''
        })
        if(data) navigate('/');
       } catch (err) {
        setErr(err.response.data)
       }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister((prevRegister) => ({
          ...prevRegister,
          [name]: value
        }));
      };

  return (
    <div className="register">
        <div className='card'>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input type="text" value={register.username} onChange={handleChange} name='username' placeholder='Username'/>
            <label htmlFor="email"></label>
            <input type="email" value={register.email} onChange={handleChange} name='email' placeholder='Email'/>
            <label htmlFor="password"></label>
            <input type="password" value={register.password} onChange={handleChange} name='password' placeholder='Password'/>
            {err && err}
            <button className='btn btn-primary'>Sign Up</button>
            <p>Already have an account?<Link to={'/'}>Login</Link></p>
        </form>      
    </div>
    </div>
  )
}

export default Register