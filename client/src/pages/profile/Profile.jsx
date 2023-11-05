import React from 'react'
import {useParams} from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import Post from '../../components/Posts/Post';
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
    console.log(connectionData);
    console.log(connectionData.includes(user.uid));
    mutation.mutate(connectionData.includes(user.uid));
  }
  
  return (
    <div>
      {
        isLoading?"Loading..."
        :<div>
          <div>
            <img src={data.coverPic} alt="cover-pic" />
          </div>
          <div>
            <img src={data.profilePic} alt="profile-pic" />
      
            <div>
              <h2>{data.username}</h2>
              {
                user.uid===data.uid?<button className='btn btn-primary' onClick={handleClick}>Update</button>:<button onClick={handleClick} className='btn btn-primary'>{connectionData&&connectionData.includes(user.uid)?"Following":"Follow"}</button>
              }
            </div>
          </div>
          <Post userId={userId}/>
      </div>
      }
    </div>
  )
}

export default Profile