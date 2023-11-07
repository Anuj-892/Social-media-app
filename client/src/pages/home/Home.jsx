import Stories from "../../components/stories/Stories"
import Posts from "../../components/Posts/Posts"



const Home = () => {
  return (
    <div className="home" style={{padding:'5px'}}>
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home