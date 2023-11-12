import React from 'react';
import './posts.scss'
import {
  useQuery
} from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import Post from '../Post/Post';
import Loader from '../Loader/Loader';

function Posts({userId}) {
    const { isLoading, error, data } = useQuery({
        queryKey:['posts'],queryFn: async() =>{
          const res = await makeRequest.get(`/posts?userId=${userId}`);
          return res.data;
        }
      });
  return (
    <div className="posts">
        {
          error?'Someting went wrong':
          isLoading?<Loader/>:
         data.map(post=>{
            return <Post post={post} key={post.pid}/>
          })
        }
      </div>
  )
}

export default Posts