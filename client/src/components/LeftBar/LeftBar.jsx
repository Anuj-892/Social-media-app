import React from 'react'
import './leftbar.scss'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai';
import {IoAnalyticsSharp,IoSettingsSharp} from 'react-icons/io5';
import {FaAffiliatetheme} from 'react-icons/fa';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {BiSolidMessageAltDetail} from 'react-icons/bi';
import {MdOutlineExplore,MdOutlineNotificationsActive} from 'react-icons/md';


function LeftBar() {
    const {user} = useAuth()
  return (
    <div className="leftBar">
        <div className="container">
            <div className="menu">
                <div className="user">
                {
                      user.profilePic?<img src={`${import.meta.env.VITE_SERVER_PORT_URL}uploads/${user.profilePic}`} alt="profile-pic"/>:
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile-pic"/>
                    }
                <span><Link to={`/profile/${user.uid}`}>{user.username}</Link></span>
                </div>
        <div className="item">
            <AiFillHome size={25}/>
            <span>Home</span>
        </div>
        <div className="item">
            <MdOutlineExplore size={25}/>
            <span>Explore</span>
        </div>
        <div className="item">
            <MdOutlineNotificationsActive size={25}/>
            <span>Notifications</span>
        </div>
        <div className="item">
            <BiSolidMessageAltDetail size={25}/>
            <span>Messages</span>
        </div>
        <div className="item">
            <BsFillBookmarkFill size={25}/>
            <span>Bookmarks</span>
        </div>
        <div className="item">
            <IoAnalyticsSharp size={25}/>
            <span>Analytics</span>
        </div>
        <div className="item">
            <FaAffiliatetheme size={25}/>
            <span>Theme</span>
        </div>
        <div className="item">
            <IoSettingsSharp size={25}/>
            <span>Settings</span>
        </div>
    </div>
    </div>
  </div>
  )
}

export default LeftBar