import LeftBar from "../../components/LeftBar/LeftBar"
import Middle from "../../components//Posts/Middle"
import RightBar from "../../components/RightBar/RightBar"
import Navbar from "../../components/navbar/Navbar"



const Home = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div className="container">
          <LeftBar/>
          <Middle/>
          <RightBar/>
        </div>
      </main>
    </div>
  )
}

export default Home