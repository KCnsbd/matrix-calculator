import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return <nav className="header-section">
        <div className="header-brand">
            <Link to="/">Grayscale Labs</Link>
        </div>
        <div className="header-links">
            <Link to="/matrix-calculator/" className="nav-link">Home</Link>
            <Link to="/matrix-calculator/lessons" className="nav-link">Lessons</Link>
            <Link to="/matrix-calculator/about-us" className="nav-link">About Us</Link>
        </div>
    </nav>;
}

export default Header;
