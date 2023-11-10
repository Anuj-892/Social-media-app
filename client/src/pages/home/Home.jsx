import Stories from "../../components/stories/Stories"
import Posts from "../../components/Posts/Posts"
import CreatePost from "../../components/createpost/CreatePost"



const Home = () => {
  return (
    <div className="home">
      {/* <Stories/> */}
      <CreatePost/>
      <Posts/>
    </div>
  )
}

export default Home