import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import MatrixCalculator from "../components/MatrixCalculator.jsx";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="page-container">

        {/* Main Content Section */}
        <main className="main-content">

          {/* Matrix Calculator Card */}
          <section className="matrix-calculator-section matrix-card">
            <MatrixCalculator />
          </section>

          {/* Matrix Overview Card */}
          <section className="matrix-overview-section matrix-card">
            <div className="matrix-overview-header">
              <h2>What are Matrices?</h2>
            </div>
            <p>
              A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns.
              Matrices are used in various fields such as mathematics, physics, computer science, and engineering
              to represent and manipulate data.
            </p>

            <Link to="/Lessons">
            <button className="learn-more-button">Learn More</button>
            </Link>
          </section>

        </main>
        </div>
        <Footer />
    </>
  );
}

export default Home;
