import React from 'react'
import "./rightbar.scss"
import {
  useQuery,
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
  return (
    <div className="rightBar">
      <div className="container">
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
                      user.profilePic?<img src={`${import.meta.env.VITE_SERVER_PORT_URL}uploads/${user.profilePic}`} alt="profile-pic"/>:
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile-pic"/>
                }
              <div>
                <h2><Link to={`/profile/${user.uid}`}>{user.username}</Link></h2>
                <span>@{user.username}</span>
              </div>
            </div>
               })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar