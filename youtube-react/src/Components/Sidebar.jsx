import Home from "../assets/home.webp";
import Shorts from "../assets/videos.webp";
import Library from "../assets/library.webp";
import sData from "../Data/SubscriberData.js";


 
function Sidebar(props) {



    function renderSubscribers(subscribers) {
  return subscribers.map((subscriber) => (
    <li className="sidebar-item" key={subscriber.id}>
      <img
        src={subscriber.profileImage}
        alt={subscriber.name}
        className="sidebar-icon"
      />
      <span>{subscriber.name}</span>
    </li>
  ));
}
    return (
        <div>
            <aside className="sidebar">
        <nav className="sidebar-list">
          <li className="sidebar-item active">
            <a href="/home" target="_top">
              <img src={Home} alt="home" className="sidebar-icon" />
              Home
            </a>
          </li>
          <li className="sidebar-item">
            <a href="/shorts" target="_top">
              <img src={Shorts} alt="shorts" className="sidebar-icon" />
              Shorts
            </a>
          </li>
          <hr />
          <div>
            <span className="Subscribers-list">Subscriptions</span>
            {renderSubscribers(sData)}
          </div>
          <li className="sidebar-item">
            <img src={Library} alt="library" className="sidebar-icon" />
            Library
          </li>
          <p>
          </p><hr />
          <span>Explore</span>
          <p />
        </nav>
        <footer>
          <p>Copyright © 2024 PK</p>
        </footer>
      </aside>
        </div>
    );
}

export default Sidebar;