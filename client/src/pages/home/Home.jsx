import LeftBar from "../../components/LeftBar/LeftBar"
import Posts from "../../components/Posts/Posts"
import RightBar from "../../components/RightBar/RightBar"
import Navbar from "../../components/navbar/Navbar"



const Home = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div className="container">
          <LeftBar/>
          <Posts/>
          <RightBar/>
        </div>
      </main>
    </div>
  )
}

export default Home