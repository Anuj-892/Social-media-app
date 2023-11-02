import React from 'react'
import {useAuth} from '../../context/AuthContext'
import {
  useMutation,
  QueryClient
} from 'react-query'
import { makeRequest } from '../../axios';
const CreatePost = () => {
  const {user} = useAuth();
  const [postData, setPostData] = useState({
    file:null,
    content:'',
})

const queryClient = useQueryClient();

const mutation = useMutation((newPost) => {
   return makeRequest.post('/posts',newPost)
}, {
  onSuccess: () => {
    queryClient.invalidateQueries("posts")
  },
})

const handleSubmit = async(e) => {
  e.preventDefault()
  mutation.mutate({image:postData.file,content:postData.content});
}
const handleChange = (e) => {
  const { name, value } = e.target;
  setPostData((prev) => ({
    ...prev,
    [name]: value
  }));
};

  return (
    <form className='create-post' onClick={handleSubmit}>
        <div className=''>
            <div className="profile-photo">
            <img src={user.profilePic} alt={user.username} />
            </div>
            <input type="text" placeholder={`What's on your mind,${user.username}?`} id='create-post'
            value={postData.content} onChange={handleChange} name='content'/>
        </div>
        <div className=''>
            <input type="file" value={postData.file} onChange={handleChange} name='file'/>
            <input type="submit" value="Post" className='btn btn-primary'/>
        </div>
      </form>
  )
}

export default CreatePost