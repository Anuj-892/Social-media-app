import React from 'react'
import './deleteaccount.scss'
import {
    useMutation,
    useQueryClient
  } from '@tanstack/react-query'
  import {useNavigate} from 'react-router-dom'
import {AiFillCheckCircle,AiFillCloseCircle} from 'react-icons/ai'
import { makeRequest } from '../../axios';

function DeleteAccount({setOpenDeleteModal,userId}) {
    const navigate = useNavigate()
    const queryClient = useQueryClient();

    const mutation = useMutation({  
        mutationFn:(userId) => {
            return makeRequest.delete(`/users`)
        }, 
        onSuccess: () => {
            // queryClient.invalidateQueries("posts")
            setOpenDeleteModal(false);
            navigate('/',{replace:true})
        },
    })

    const handleClick = ()=>{
        mutation.mutate(userId);
        setDeleteEl(false);
    }
  return(
    <div className="deleteAccount">
    <div className="card">
        <div className='top'>
            <h2>Delete</h2>
            <p>Are you sure you want to delete your account?</p>
        </div>
        <div className="bottom">
            <button  className='green' onClick={handleClick}><AiFillCheckCircle size={25}/></button>
            <button className='red' onClick={()=>setOpenDeleteModal(false)}><AiFillCloseCircle  size={25}/></button>
        </div>
    </div>
</div>
  )
}
export default DeleteAccount