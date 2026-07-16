import { useSelector } from "react-redux";
import axios from "axios";
function Header() {

    const count = useSelector((state)=>state.counter.count)
     const response =  axios.get("https://fakestoreapi.com/products")
     console.log(response)

    return (
        <div className="flex justify-between px-10 mt-4 text-xl">
           <p> Header</p>
           <p>count: {count}</p>
        </div>
    );
}

export default Header;