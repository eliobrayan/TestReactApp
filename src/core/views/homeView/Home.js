import users from "../../data/users";
import animals from "../../data/animals";
import UserCard from "./cards/UserCard";
import Animales from "./cards/AnimalsCard";

function Home () {
  return <div>
    <div>
        <h2>Personas</h2>
        {
          users.map((user) => {
            return <UserCard user={user} />
          })
        }        
      </div>
      <div>
        <h2>animales</h2>{
        animals.map((user) => {
            return <Animales user={user} />
          })}
      </div>
  </div>
}

export default Home;