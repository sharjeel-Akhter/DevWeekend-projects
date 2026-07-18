import { useSelector } from "react-redux";
import axios from "axios";
function Header() {

    const count = useSelector((state)=>state.counter.count)

    return (
        <div className="flex justify-between px-10 mt-4 text-xl">
           <p> Header</p>
           <p>count: {count}</p>
        </div>
    );
}

export default Header;