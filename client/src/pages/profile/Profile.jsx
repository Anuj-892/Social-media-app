import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'
import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import './profile.scss'
import {AiFillDelete} from 'react-icons/ai'
import { makeRequest } from '../../axios';
import Loader from '../../components/Loader/Loader'
import Posts from '../../components/Posts/Posts';
import UpdateAccount from '../../components/updateAccount/updateAccount'
import DeleteAccount from '../../components/deleteAccount/DeleteAccount'
import CreatePost from '../../components/createpost/CreatePost'


function Profile() {
  const {userId} = useParams();
  const [openModal,setOpenModal] = useState(false)
  const [openDeleteModal,setOpenDeleteModal] = useState(false)
  const {user} = useAuth()
  const { isLoading, error, data } = useQuery({    
    queryKey:['user',userId],queryFn: async() =>{
      const res = await makeRequest.get(`/users/find/${userId}`);
      return res.data;
    }
  });

  const {data:connectionData } = useQuery({    
    queryKey:['connections',userId],queryFn: async() =>{
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
        isLoading?<Loader/>:
        <div className='profile'>
      <div className="images">
       {
        data.coverPic?<img src={`${import.meta.env.VITE_SERVER_PORT_URL}/uploads/${data.coverPic}`} alt="cover-pic" className="cover"/>:
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="cover-pic" className='cover'/>
        }
       {
        data.profilePic?<img src={`${import.meta.env.VITE_SERVER_PORT_URL}/uploads/${data.profilePic}`} alt="profile-pic" className="profilePic"/>:
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile-pic" className="profilePic"/>
        }
      </div>
      <div className="profileInfo">
        <h2>{data.username}</h2>
        <div className="links"></div>
        <p className='status'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus quae aperiam omnis eos neque eum voluptatibus perspiciatis ducimus iure</p>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        {
                user.uid===data.uid?<button className='btn btn-primary' onClick={()=>setOpenModal(true)}>Update</button>:<button onClick={handleClick} className='btn btn-primary'>{connectionData&&connectionData.includes(user.uid)?"Following":"Follow"}</button>
         }     
         {
          user.uid==userId?<AiFillDelete color='red' size={25} style={{cursor:'pointer'}} onClick={()=>setOpenDeleteModal(true)}/> :<></>
         } 
        </div>
         {openModal&&<UpdateAccount setOpenModal={setOpenModal}/>}
         {openDeleteModal&&<DeleteAccount userId={userId} setOpenDeleteModal={setOpenDeleteModal}/>}
      </div>
      <div className='userPosts'>
        {user.uid==userId?<h2>Your Posts</h2>:<h2>{data.username}'s Posts</h2>}
        
        <br/>
        {(userId==user.uid) && <CreatePost/>}
        <Posts userId={userId}/>  
      </div> 
    </div>
      }
    </>
  )
}

export default Profile