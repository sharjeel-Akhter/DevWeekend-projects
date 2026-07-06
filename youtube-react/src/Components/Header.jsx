import hamburger from '../assets/hamburger.webp';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import micro from '../assets/micro.png';
import notification from '../assets/notification.webp';
import profile from '../assets/profile.png';


function Header() {
    return (
        <div>
            <header className="header">
        <div className="container">
          <div className="header-left">
            <img src={hamburger} alt="menu" className="menu" />
            <div className="logo">
              <img src= {logo} alt="yt logo" width="50px" height="50px" className="menu" />
              <a href="/" target="_top" className="logo">Youtube <sup>PK</sup></a>
            </div>
          </div>
          <div className="header-center">
            <div>
              <form className="search-form">
                <label htmlFor="search">Search for youtube</label>
                <input id="search" type="text" autoComplete="off" placeholder="Search for yt" className="search-input" />
                <button type="submit" className="search-btn">
                  <img src={search} alt="search" className="search-icon" />
                </button>
              </form>
            </div>
            <img src={micro} alt="voice" className="voice-icon" />
          </div>
          <div className="header-right">
            <span className="create-icon">  + Create</span>
            <button>
              <img src={notification} alt="notification" className="header-icon" />
            </button>
            <button>
              <img src={profile} alt="profile" className="header-icon profile" />
            </button>
          </div>
        </div>
      </header>
        </div>
    );
}

export default Header;