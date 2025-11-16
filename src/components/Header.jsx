import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return <nav className="header-section">
        <div className="header-brand">
            <Link to="/">Matrix Calculator</Link>
        </div>
        <div className="header-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/lessons" className="nav-link">Lessons</Link>
            <Link to="/about-us" className="nav-link">About Us</Link>
        </div>
    </nav>;
}

export default Header;
