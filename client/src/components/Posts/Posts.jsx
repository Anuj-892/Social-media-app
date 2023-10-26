import React from 'react'
import './Posts.css'

function Posts() {
  return (
    <div className="middle">
      <div className="stories">
        <div className="story">
          <div className="profile-photo">
            <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <p className="name">A</p>
        </div>
        <div className="story">
          <div className="profile-photo">
            <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <p className="name">B</p>
        </div>
        <div className="story">
          <div className="profile-photo">
            <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <p className="name">C</p>
        </div>
        <div className="story">
          <div className="profile-photo">
            <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <p className="name">D</p>
        </div>
        <div className="story">
          <div className="profile-photo">
            <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <p className="name">E</p>
        </div>
        <div className="story">
          <div className="profile-photo">
            <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>
          <p className="name">F</p>
        </div>
      </div>
      <form className='create-post'>
        <div className="profile-photo">
          <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <input type="text" placeholder="What's on your mind,Diana?" id='create-post'/>
        <input type="submit" value="Post" className='btn btn-primary'/>
      </form>

      <div className="feeds">
        <div className="feed">
          <div className="head">
            <div className="user">
              <div className="profile-photo">
                <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
              <div className="ingo">
                <h3>Lana Rose</h3>
                <small>Dubai,15 minutes ago</small>
              </div>
            </div>
            <span className="edit">
                <i className="uil uil-ellipsis-h"></i>
              </span>
          </div>
          <div className="photo">
            <img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
          </div>

          <div className="action-buttons">
            <div className="interaction-buttons">
              <span><i className="uil uil-heart"></i></span>
              <span><i className="uil uil-comment-dots"></i></span>
              <span><i className="uil uil-share-alt"></i></span>
            </div>
            <div className="bookmark">
              <span><i className="uil uil-bookmark-full"></i></span>
            </div>
          </div>

          <div className="liked-by">
            <span><img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></span>
            <span><img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></span>
            <span><img src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></span>
            <p>Liked by <b>Ernest Achiever</b> and <b>2,323 others</b></p>
          </div>

          <div className="caption">
            <p><b>Lana Rose</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, impedit. <span className="harsh-tag">#lifestyle</span></p>
          </div>
          <div className="comments text-muted">View all 277 comments</div>
        </div>
      </div>
    </div>
  )
}

export default Posts;