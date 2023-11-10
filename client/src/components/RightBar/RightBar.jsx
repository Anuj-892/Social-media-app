import React from 'react'
import "./rightbar.scss"
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import { Link } from 'react-router-dom';

function RightBar() {
  const { isLoading, error, data } = useQuery({    
    queryKey:['users'],queryFn: async() =>{
      const res = await makeRequest.get(`/users`);
      return res.data;
    }
  });
  console.log(data);
  return (
    <div className="rightBar">
      <div className="container">
        {/* <div className="item">
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
        </div> */}
        <div className="item">
          <span>
          Who to follow
          </span>
          <div className="follows">
            {
              isLoading?"Loading...":
               data.map(user=>{
                return  <div className="follow">
               {
                      user.profilePic?<img src={user.profilePic} alt="profile-pic"/>:
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile-pic"/>
                }
              <div>
                <h2><Link to={`/profile/${user.uid}`}>{user.username}</Link></h2>
                <span>@{user.username}</span>
              </div>
            </div>
               })
            }
            
            {/* <div className="follow">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar