import React from 'react'
import './LeftBar.css'
import { useAuth } from '../../context/AuthContext'

function LeftBar() {
    const {user} = useAuth()
  return (
    <div className="left">
        <a className="profile">
            <div className="profile-photo">
                <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
            <div className="handle">
                <h4>{user.username}</h4>
                <p className="text-muted">
                    @{user.username}
                </p>
            </div>
        </a>

        <div className="sidebar">
            <a className="menu-item active">
                <span><i className='uil uil-home'></i></span><h3>Home</h3>
            </a>
            <a className="menu-item">
                <span><i className='uil uil-compass'></i></span><h3>Explore</h3>
            </a>
            <a className="menu-item">
                <span><i className='uil uil-bell'></i></span><h3>Notifications</h3>
            </a>
            <a className="menu-item">
                <span><i className='uil uil-envelope-all'></i></span><h3>Message</h3>
            </a>
            <a className="menu-item">
                <span><i className='uil uil-bookmark'></i></span><h3>Bookmarks</h3>
            </a>
            <a className="menu-item">
                <span><i className='uil uil-chart-line'></i></span><h3>Analytics</h3>
            </a>
            <a className="menu-item">
                <span><i className='uil uil-palette'></i></span><h3>Theme</h3>
            </a>
            <a className="menu-item">
                <span><i className='uil uil-setting'></i></span><h3>Settings</h3>
            </a>
        </div>
        <label htmlFor="create-Post" className='btn btn-primary'>Create Post</label>
    </div>
  )
}

export default LeftBar