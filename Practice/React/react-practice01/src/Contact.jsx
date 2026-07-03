import { Link } from "react-router";

function Contact() {
    return (
        // <div>
        //     <h2>Contact Page</h2>
        //     <Link to="/about">About<Link/>
        //     <Link to="/">Home<Link/>
        // </div>
        <div>
            <h2>Contact Page</h2>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Contact;