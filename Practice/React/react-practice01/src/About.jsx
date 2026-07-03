import { Link } from "react-router";


function About() {
    return (
        <div>
            <h2>About Page</h2>
            <Link to="/contact">Contact</Link>
            <Link to="/">Home</Link>
        </div>
    );
}

export default About;