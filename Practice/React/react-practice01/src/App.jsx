import "./App.css";
import FunctionalClassComp from "./components/FunctionalClassComp";
import Greetings from "./components/Greetings";
import UserCard from "./components/UserCard";
import Input from "./components/Input";
function App() {
  const username = "sharjeel";

  return (
    <>
    <h2>Hello {username}</h2>
    <FunctionalClassComp />
    {/* <Greetings name={"Sharjeel"} age={20}/> */}


    {/* //UserCard Component */}

    {/* <UserCard
    name="John Doe" 
    avatar="https://i.pravatar.cc/150?img=3" 
    email="JohnDoe@gamil.com"/> 

    <UserCard
    name="John Doe" 
    avatar="https://i.pravatar.cc/150?img=33" 
    email="JohnDoe@gamil.com"/> 

    <UserCard
    name="John Doe" 
    avatar="https://i.pravatar.cc/150?img=01" 
    email="JohnDoe@gamil.com"/>   */}

      {/* <Input/> */}
    </>
  )
}

export default App
