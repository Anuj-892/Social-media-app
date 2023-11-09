import React, { useState } from 'react'
import './updateAccount.scss'
import {
    useMutation,
    useQueryClient
  } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import {AiFillCloseCircle} from 'react-icons/ai'
import { useAuth } from '../../context/AuthContext'

function UpdateAccount({setOpenModal}) {
    const {user,loginUser} = useAuth();
    const [updateAccount, setUpdateAccount] = useState({
        profilePic:user.profilePic,
        coverPic:user.coverPic,
        username:user.username,
        email:user.email
    })
    console.log('hey');
    const upload = async()=>{
      try {
        const formData = new FormData();
        formData.append("file",updateAccount.profilePic);
        const res = await makeRequest.post("/images",formData)
        return res.data;
      } catch (error) {
        console.log(error);
      }
    }

    const helper = async() => {
        const res = await makeRequest.get(`/users/refetch`);
        loginUser(res.data)
    }
    
      const queryClient = useQueryClient();
    
      const mutation = useMutation({  
        mutationFn:(newDetails) => {
          return makeRequest.put(`/users`,newDetails)
      }, 
        onSuccess: () => {
          helper();
          queryClient.invalidateQueries("user")
        //   queryClient.invalidateQueries("posts")
        },
      })
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        let imgUrl= "";
        if(updateAccount.profilePic) imgUrl= await upload();
        console.log({username:updateAccount.username,email:updateAccount.email,profilePic:imgUrl,coverPic:updateAccount.coverPic,});
        mutation.mutate({username:updateAccount.username,email:updateAccount.email,profilePic:imgUrl,coverPic:updateAccount.coverPic,});
        setOpenModal(false);
      }
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdateAccount((prev) => ({
          ...prev,
          [name]: value
        }));
      };
    
  return (
    <div className='updateAccount'>
      <div className='card'>
        <div className='top'>
           <h2>Edit</h2>
           <AiFillCloseCircle style={{cursor:"pointer"}} size={25} onClick={()=>setOpenModal
            (false)}/>
        </div>
         <div className='bottom'>
            <input type="text" placeholder='Username' name='username' value={updateAccount.username} onChange={handleChange}/>
            <input type="email" placeholder='Email' name='email' value={updateAccount.email} onChange={handleChange}/>
            <input type="file" name='profilePic' value={updateAccount.profilePic} onChange={handleChange}/>
            <input type="file" name='coverPic' value={updateAccount.coverPic} onChange={handleChange}/>

            <button onClick={handleSubmit}>Update</button>
         </div>
      </div>
    </div>
  )
}

export default UpdateAccount