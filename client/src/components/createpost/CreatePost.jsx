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
  const [file, setFile] = useState(null)
  const [content, setContent] = useState("")

const upload = async()=>{
  try {
    const formData = new FormData();
    formData.append("file",file);
    const res = await makeRequest.post("/images",formData)
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

const queryClient = useQueryClient();

const mutation = useMutation({  
  mutationFn:(newPost) => {
    return makeRequest.post('/posts/create',newPost)
 }, 
   onSuccess: () => {
     queryClient.invalidateQueries("posts")
   },
})

const handleSubmit = async(e) => {
  e.preventDefault();
  let imgUrl= "";
  if(file != null){
    imgUrl= await upload();
  }
  mutation.mutate({content:content,image:imgUrl});
  setContent("")
  setFile(null)
}
const handleChange = (e) => {
  const selectedFile = e.target.files[0];
  setFile(selectedFile);
};

  return (
    <div className='create-post' >          
            <div className='top'>
             {
              user.profilePic?<img src={`${import.meta.env.VITE_SERVER_PORT_URL}/uploads/${user.profilePic}`} alt={user.username} />:
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="post-profilephoto"/>
              } 
              
              <input type="text" placeholder={`What's on your mind,${user.username} ?`} id='create-post'
              name='content' value={content} onChange={(e)=>setContent(e.target.value)} />
            </div>
            
            <div className='bottom'>
              <input type="file" name='file' onChange={handleChange}/>
              <button onClick={handleSubmit} className='btn btn-primary'>Post</button>
            </div>
      </div>
  )
}

export default CreatePost