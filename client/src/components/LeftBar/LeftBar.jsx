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
                <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <span>{user.username}</span>
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