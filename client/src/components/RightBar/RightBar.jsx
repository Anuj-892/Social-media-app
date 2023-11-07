import React from 'react'
import "./rightbar.scss"

function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>What’s happening</span>
          <div className="trends">
            <div className="trend">
              <h6>Entertainment.Trending</h6>
            <h3>#deepfake</h3>
            <h4>11K posts</h4>
            </div>
            <div className="trend">
              <h6>Entertainment.Trending</h6>
            <h3>#deepfake</h3>
            <h4>11K posts</h4>
            </div>
            <div className="trend">
              <h6>Entertainment.Trending</h6>
            <h3>#deepfake</h3>
            <h4>11K posts</h4>
            </div>
            <div className="trend">
              <h6>Entertainment.Trending</h6>
            <h3>#deepfake</h3>
            <h4>11K posts</h4>
            </div>
          </div>
        </div>
        <div className="item">
          <span>
          Who to follow
          </span>
          <div className="follows">
            <div className="follow">
            <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <div>
              <h2>abc</h2>
              <span>@abc</span>
            </div>
            <button>Follow</button>
            </div>
            <div className="follow">
            <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <div>
              <h2>abc</h2>
              <span>@abc</span>
            </div>
            <button>Follow</button>
            </div>
            <div className="follow">
            <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <div>
              <h2>abc</h2>
              <span>@abc</span>
            </div>
            <button>Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar