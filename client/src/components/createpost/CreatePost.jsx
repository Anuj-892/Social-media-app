import React,{ useState } from 'react'
import {useAuth} from '../../context/AuthContext'
import {
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { makeRequest } from '../../axios';
import './createpost.scss'

const CreatePost = () => {
  const {user} = useAuth();
  const [postData, setPostData] = useState({
    file:null,
    content:'',
})

const upload = async()=>{
  try {
    const formData = new FormData();
    formData.append("file",postData.file);
    const res = await makeRequest.post("/images",formData)
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

const queryClient = useQueryClient();

const mutation = useMutation({  
  mutationFn:(newPost) => {
    console.log(newPost);
    return makeRequest.post('/posts/create',newPost)
 }, 
   onSuccess: () => {
     queryClient.invalidateQueries("posts")
   },
})

const handleSubmit = async(e) => {
  e.preventDefault();
  let imgUrl= "";
  if(postData.file) imgUrl= await upload();
  console.log(imgUrl);
  mutation.mutate({content:postData.content,image:imgUrl});
}
const handleChange = (e) => {
  const { name, value } = e.target;
  setPostData((prev) => ({
    ...prev,
    [name]: value
  }));
};
// 
  return (
    <div className='create-post' >          
            <div className='top'>
             {
              user.profilePic?<img src={user.profilePic} alt={user.username} />:
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="post-profilephoto"/>
              } 
              
              <input type="text" placeholder={`What's on your mind,${user.username} ?`} id='create-post'
              name='content' value={postData.content} onChange={handleChange} />
            </div>
            
            <div className='bottom'>
              <input type="file" name='file' value={postData.file} onChange={handleChange}/>
              <button onClick={handleSubmit} className='btn btn-primary'>Post</button>
            </div>
      </div>
  )
}

export default CreatePost