import React from 'react'
import './Posts.css'
import Feed from './Feed';
import {
  useQuery
} from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import Story from './Story';
import CreatePost from './CreatePost';
function Posts() {
  const { isLoading, error, data } = useQuery({
    queryKey:['posts'],queryFn: async() =>{
      const res = await makeRequest.get("/posts");
      return res.data;
    }
  });
  return (
    <div className="middle">
      <div className="stories">
        <Story/>        
        <Story/>        
        <Story/>        
        <Story/>        
        <Story/>        
        <Story/>        
      </div>
      <CreatePost/>

      <div className="feeds">
        {
          error?'Someting went wrong':
          isLoading?"Loading...":
         data.map(post=>{
            return <Feed post={post} key={post.pid}/>
          })
        }
      </div>
    </div>
  )
}

export default Posts;