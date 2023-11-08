import React from 'react'
import {useParams} from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import './profile.scss'
import { makeRequest } from '../../axios';
import Posts from '../../components/Posts/Posts';
function Profile() {
  const {userId} = useParams();
  const {user} = useAuth()
  const { isLoading, error, data } = useQuery({    
    queryKey:['user'],queryFn: async() =>{
      const res = await makeRequest.get(`/users/find/${userId}`);
      return res.data;
    }
  });

  const {data:connectionData } = useQuery({    
    queryKey:['connections'],queryFn: async() =>{
      const res = await makeRequest.get(`/connections/${userId}`);
      return res.data;
    }
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({  
    mutationFn:(following) => {
      if(!following) return makeRequest.post(`/connections/${userId}`);
      return makeRequest.delete(`/connections/${userId}`);
   }, 
     onSuccess: () => {
       queryClient.invalidateQueries("connections")
     },
  })

  const handleClick = () => {
    mutation.mutate(connectionData.includes(user.uid));
  }
  
  return (
    <>
      {
        isLoading?"Loading...":
        <div className='profile'>
      <div className="images">
       {
        data.coverPic?<img src={data.coverPic} alt="cover-pic" className="profilePic"/>:
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="cover-pic" className='cover'/>
        }
       {
        data.profilePic?<img src={data.profilePic} alt="profile-pic" className="profilePic"/>:
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile-pic" className="profilePic"/>
        }
      </div>
      <div className="profileInfo">
        <h2>{data.username}</h2>
        <div className="links"></div>
        <p className='status'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus quae aperiam omnis eos neque eum voluptatibus perspiciatis ducimus iure</p>
        {
                user.uid===data.uid?<button className='btn btn-primary' onClick={handleClick}>Update</button>:<button onClick={handleClick} className='btn btn-primary'>{connectionData&&connectionData.includes(user.uid)?"Following":"Follow"}</button>
         }       
      </div>
      <div style={{padding:'10px 40px'}}>
        <h2>Your Posts</h2>
        <br/>
        <Posts userId={userId}/>   
      </div> 
    </div>
      }
    </>
  )
}

export default Profile