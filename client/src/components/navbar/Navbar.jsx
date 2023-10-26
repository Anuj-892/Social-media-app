import React from 'react'
import "./Navbar.css"

function Navbar() {
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
                <div className="profile-photo">
                    <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar