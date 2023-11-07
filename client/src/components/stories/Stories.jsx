import React from 'react'
import './stories.scss'

const stories = [
  {
    id:1,
    name:"John Doe",
    img:"https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:2,
    name:"John Doe",
    img:"https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:3,
    name:"John Doe",
    img:"https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id:4,
    name:"John Doe",
    img:"https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
  }
]

function Stories() {
  return (
    <div className="stories">
      {
        stories.map(story =>(
          <div className="story" key={story.id}>
            <img src={story.img} alt="story-image" />
            <span>{story.name}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Stories