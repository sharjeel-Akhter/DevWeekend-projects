import { Outlet } from "react-router";
import Headers from "../Components/Header";

function Rootlayout() {
    return (
        <div>
            <Headers />
            <main>
            <Outlet />
            </main>
        </div>
    );
}

export default Rootlayout;