import React from 'react'
import './Posts.css'
import Story from './Story';
import CreatePost from './CreatePost';
import Post from './Posts';
function Posts() {
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
      <Post/>
    </div>
  )
}

export default Posts;