import React,{useState} from 'react'
import './login.scss';
import { Link,useNavigate } from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'
import axios from 'axios';

function Login() {
  const {loginUser} = useAuth();
  const [login, setLogin] = useState({
    email:'',
    password:''
})
const [err, setErr] = useState(null)
const navigate = useNavigate();
const handleSubmit = async(e) => {
     e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login",login,{
      withCredentials:true
    });
    setLogin({
      email:'',
      password:''
    });
    loginUser(response.data)        
    navigate('/home',{replace:true})
    } catch (err) {
      setErr(err.response.data)
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
    <div className="login">
    <div className='card'>
      <div className="left">
        <h1>Connect</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos cumque reiciendis eligendi! Expedita distinctio dolores recusandae? Laboriosam iusto eveniet numquam, veritatis inventore distinctio sequi. In recusandae inventore alias hic!</p>
        <span>Don't have an account?<Link to={'/register'}>Sign Up</Link></span>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input type="email" value={login.email} onChange={handleChange} name='email' placeholder='Email'/>
          <label htmlFor="password"></label>
          <input type="password" value={login.password} onChange={handleChange} name='password' placeholder='Password' />
          {err && err}
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
   </div>
</div>
  )
}

export default Login