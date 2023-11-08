import React from 'react'
import "./navbar.scss"
import {useNavigate,Link} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {AiFillHome,AiOutlineSearch,AiOutlineMail} from 'react-icons/ai'
import {BsFillGrid1X2Fill} from 'react-icons/bs'
import {BiSolidUserCircle} from 'react-icons/bi'
import {MdDarkMode} from 'react-icons/md'
import {GrNotification} from 'react-icons/gr'
import {FaUserAlt} from 'react-icons/fa'

function Navbar() {
    const {user,logoutUser} = useAuth()

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
        <div className="navbar">
            <div className="left">
                <Link to={'/home'} style={{textDecoration:"none"}}>
                    <span>Connect</span>
                </Link>
                <AiFillHome/>
                <BsFillGrid1X2Fill/>
                <MdDarkMode/>
                <div className="search">
                  <AiOutlineSearch/>
                  <input type="search" placeholder='Search for creators,inspirations and projects'/>
                </div>
            </div>
            <div className="right">
                <GrNotification/>
                <AiOutlineMail/>
                <FaUserAlt/>
                <div className="user">
                    {
                      user.profilePic?<img src={user.profilePic} alt="profile-pic"/>:
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile-pic"/>
                    }
                    <span>{user.username}</span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar