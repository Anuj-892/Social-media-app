import React from 'react'
import Feed from './Feed';
import {
  useQuery
} from '@tanstack/react-query'
import { makeRequest } from '../../axios';

function Post({userId}) {
    const { isLoading, error, data } = useQuery({
        queryKey:['posts'],queryFn: async() =>{
          const res = await makeRequest.get(`/posts?userId=${userId}`);
          return res.data;
        }
      });
  return (
    <div className="feeds">
        {
          error?'Someting went wrong':
          isLoading?"Loading...":
         data.map(post=>{
            return <Feed post={post} key={post.pid}/>
          })
        }
      </div>
  )
}

export default Post