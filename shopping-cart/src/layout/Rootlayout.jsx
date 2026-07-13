import { Outlet } from "react-router";
import Headers from "../Components/Header";

function Rootlayout() {
    return (
        <div>
            <Headers />
            <Outlet />
        </div>
    );
}

export default Rootlayout;