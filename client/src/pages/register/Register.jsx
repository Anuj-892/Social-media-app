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
        const data = await axios.post("http://localhost:5000/api/auth/register",register);
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
          <div className="left">
            <h1>Connect</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos cumque reiciendis eligendi! Expedita distinctio dolores recusandae? Laboriosam iusto eveniet numquam, veritatis inventore distinctio sequi. In recusandae inventore alias hic!</p>
            <p>Already have an account?<Link to={'/'}>Login</Link></p>
        </div>

        <div className="right">
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
        </form>
        </div>       
    </div>
    </div>
  )
}

export default Register