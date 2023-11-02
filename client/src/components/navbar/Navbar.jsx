import React from 'react'
import "./Navbar.css"
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Navbar() {
    const {logoutUser} = useAuth()

    const navigate = useNavigate();
    const handleLogout = async(e) => {
        try {
            e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/logout",{
        method:'POST', 
        credentials: 'include'
        });
        const data = await response.json();
        if(data){
         logoutUser();
         navigate('/',{replace:true})
        }
        } catch (error) {
         console.log(error);   
        }
    }
  return (
    <nav>
        <div className="container">
            <h2 className="log">Connect</h2>
            <div className="search-bar">
                <i className="uil uil-search"></i>
                <input type="search" placeholder='Search for creators,inspirations and projects'/>
            </div>
            <div className="create">
                <label className='btn btn-primary' htmlFor="create-post">Create</label>
                <div className="logout profile-photo" onClick={handleLogout}>
                    <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar