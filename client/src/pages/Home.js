import Kanban from "../components/Kanban/Kanban"
import pp from "../components/profile/images/pp.png";

const Home = () => {
  return (
    <div>
        <h1 className="text-xl">
          <img src={pp} alt="" className="w-[98%] rounded-lg my-4 mx-auto" />
          <Kanban/>
        </h1>
    </div>
  )
}

export default Home