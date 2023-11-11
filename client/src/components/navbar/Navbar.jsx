import React from 'react'
import "./navbar.scss"
import {useNavigate,Link} from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import {AiFillHome,AiOutlineSearch,AiOutlineMail,AiOutlineLogout} from 'react-icons/ai'
import {BsFillGrid1X2Fill} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {GrNotification} from 'react-icons/gr'
import {FaUserAlt} from 'react-icons/fa'

function Navbar() {
    const {user,logoutUser} = useAuth()

    const navigate = useNavigate();
    const handleLogout = async(e) => {
        try {
            e.preventDefault();
        const response = await fetch(`${import.meta.env.VITE_SERVER_PORT_URL}api/auth/logout`,{
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
                <AiFillHome className='hide'/>
                <BsFillGrid1X2Fill className='hide'/>
                <MdDarkMode/>
                <div className="search search-hide">
                  <AiOutlineSearch/>
                  <input  type="search" placeholder='Search for creators,inspirations and projects'/>
                </div>
            </div>
            <div className="right">
                <GrNotification className='hide'/>
                <AiOutlineMail className='hide'/>
                <FaUserAlt className='hide'/>
                <button onClick={handleLogout}><AiOutlineLogout size={18}/></button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar