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

function Comments({postId}) {
    const {user} = useAuth();
    const [comment, setComment] = useState("")
    const { isLoading, error, data } = useQuery({
        queryKey:['comments'],queryFn: async() =>{
          const res = await makeRequest.get(`/comments/${postId}`);
          return res.data;
        }
      });

      const queryClient = useQueryClient();

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
    // let imgUrl= await upload();
  // image:postData.file,
    mutation.mutate({comment:comment});
  }
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPostData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

  return (
     <div className='comments'>
        <div className="write">
           <img src={user.profilePic} alt={user.username} />
           <input type="text" placeholder='Write a comment'
              onChange={(e)=>setComment(e.target.value)} value={comment}/>
            <button>Comment</button>
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