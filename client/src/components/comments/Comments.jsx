import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import './comments.scss'
import {
    useQuery,
    useMutation,
    useQueryClient
  } from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import Comment from './Comment';
import {AiOutlineSend} from 'react-icons/ai'

function Comments({postId,setCommentVal}) {
    const {user} = useAuth();
    const [comment, setComment] = useState("")
    const { isLoading, error, data } = useQuery({
        queryKey:['comments'],queryFn: async() =>{
          const res = await makeRequest.get(`/comments/${postId}`);
          return res.data;
        }
      });

      const queryClient = useQueryClient();
   if(data){
    setCommentVal(data.length)
   }
const mutation = useMutation({  
  mutationFn:(newComment) => {
    return makeRequest.post(`/comments/${postId}/create`,newComment)
 }, 
   onSuccess: () => {
     queryClient.invalidateQueries("comments")
   },
})

const handleSubmit = async(e) => {
    e.preventDefault();
    mutation.mutate({comment:comment});
    setComment("")
  }


  return (
     <div className='comments'>
        <div className="write">
        {
            user.profilePic? <img src={`${import.meta.env.VITE_SERVER_PORT_URL}/uploads/${user.profilePic}`} alt={user.username} />:
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile-pic"/>
          }
           <input type="text" placeholder='Write a comment'
              onChange={(e)=>setComment(e.target.value)} value={comment}/>
            <button onClick={handleSubmit}><AiOutlineSend/></button>
        </div>
        {
            error?'Someting went wrong':
            isLoading?"Loading...":
          data.map(comment=>{
              return <Comment comment={comment} key={comment.cid}/>
            })
          }
      </div>
  )
}

export default Comments