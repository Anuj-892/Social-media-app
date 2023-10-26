import React,{useState} from 'react'
import './Login.css'
import { Link,useNavigate } from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'

function Login() {
  const {loginUser} = useAuth();
  const [login, setLogin] = useState({
    email:'',
    password:''
})
const navigate = useNavigate();
const handleSubmit = async(e) => {
  e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login",{
       headers:{
         'Content-Type':'application/json',
       },
       method:'POST', 
       body:JSON.stringify(login)
    });
    const data = await response.json();
    setLogin({
      email:'',
      password:''
  });
    if(data){
      loginUser(data)
      navigate('/feed',{replace:true})
    }
}

const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [name]: value
    }));
  };
  return (
    <div className="login-container">
    <div className='login'>
    <h1>Connect</h1>

    <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input type="email" value={login.email} onChange={handleChange} name='email' placeholder='Email'/>
        <label htmlFor="password"></label>
        <input type="password" value={login.password} onChange={handleChange} name='password' placeholder='Password'/>
        <button className='btn btn-primary'>Login</button>
    </form>
    <p>Don't have an account?<Link to={'/register'}>Sign Up</Link></p>
</div>
</div>
  )
}

export default Login