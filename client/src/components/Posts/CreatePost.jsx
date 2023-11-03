import React,{ useState } from 'react'
import {useAuth} from '../../context/AuthContext'
import {
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { makeRequest } from '../../axios';

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
    console.log(formData);
    const res = await makeRequest.post("/images",formData)
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// const handleClick = async(e) => {
//   e.preventDefault();
//   // let imgUrl="";
//   // if(file) imgUrl= await upload();
//   // image:imgUrl
//   mutation.mutate({content:postData.content})
// }

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
  let imgUrl= await upload();
// image:postData.file,
  mutation.mutate({content:postData.content});
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
    <form className='create-post' >   
            <div className="profile-photo">
               <img src={user.profilePic} alt={user.username} />
            </div>
            
            <input type="text" placeholder={`What's on your mind,${user.username}?`} id='create-post'
            name='content' value={postData.content} onChange={handleChange} />
        
            <input type="file" name='file' value={postData.file} onChange={handleChange}/>
            <button onClick={handleSubmit} className='btn btn-primary'>Post</button>
      </form>
  )
}

export default CreatePost