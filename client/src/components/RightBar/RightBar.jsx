import React from 'react'
import "./RightBar.css"

function RightBar() {
  return (
   <div className="right">
    <div className="messages">
      <div className="heading">
        <h4>Messages</h4><i className="uil uil-edit"></i>
      </div>
      <div className="search-bar">
        <i className="uil uil-search"></i>
        <input type="search" placeholder='Search messages' id='message-search'/>
      </div>
      <div className="category">
        <h6 className="active">Primary</h6>
        <h6>General</h6>
        <h6 className="message-requests">Requests(7)</h6>
      </div>
      <div className="message">
        <div className="profile-photo">
          <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <div className="message-body">
          <h5>Edem Quist</h5>
          <p className="text-muted">Just woke up bruh</p>
        </div>
      </div>
      <div className="message">
        <div className="profile-photo">
          <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <div className="message-body">
          <h5>Edem Quist</h5>
          <p className="text-bold">Just woke up bruh</p>
        </div>
      </div>
      <div className="message">
        <div className="profile-photo">
          <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <div className="message-body">
          <h5>Edem Quist</h5>
          <p className="text-muted">Just woke up bruh</p>
        </div>
      </div>
      <div className="message">
        <div className="profile-photo">
          <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <div className="message-body">
          <h5>Edem Quist</h5>
          <p className="text-bold">Just woke up bruh</p>
        </div>
      </div>
    </div>

    <div className="friend-requests">
      <h4>Requests</h4>
      <div className="request">
        <div className="info">
          <div className="profile-photo">
            <img src="" alt="" />
          </div>
          <div>
            <h5>Hajia Bintu</h5>
            <p className="text-muted">
              8 mutual friends
            </p>
            <div className="action">
              <button className="btn btn-primary">
                Accept
              </button>
              <button className="btn">
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default RightBar