import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import MatrixCalculator from "../components/MatrixCalculator.jsx";
import MatrixSVG from "../components/MatrixSVG.jsx";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Header />
      <div className="page-container">

        <main className="main-content">

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

          {/* Matrix Calculator Card */}
          <section className="matrix-calculator-section matrix-card">
            <MatrixCalculator />
          </section>

          {/* Matrix Operations Notes */}
          <section className="matrix-operations-note">
          <div className="note-container">
            <h3>Note on Matrix Operations</h3>
            <p>Please ensure that the matrices you input are compatible with the operation you wish to perform!</p>

            {/* ADDITION / SUBTRACTION */}
            <div className="operation-container">
              <h4>Addition / Subtraction</h4>
              <p>Matrices must have the same dimensions.</p>

              <p>Compatible:</p>
              <div className="matrix-svg-wrapper">
                <MatrixSVG data={[["a", "b"], ["c", "d"]]} />
                <MatrixSVG data={[["e", "f"], ["g", "h"]]} />
              </div>

              <p>NOT Compatible:</p>
              <div className="matrix-svg-wrapper">
                <MatrixSVG data={[["a", "b"], ["c", "d"]]} />
                <MatrixSVG data={[["e", "f"], ["g", "h"], ["i", "j"]]} />
              </div>
            </div>

            {/* MULTIPLICATION */}
            <div className="operation-container">
              <h4>Multiplication</h4>
              <p>Number of columns in the first matrix must equal the number of rows in the second matrix.</p>

              <p>Compatible:</p>
              <div className="matrix-svg-wrapper">
                <MatrixSVG data={[["a", "b", "c"], ["d", "e", "f"]]} />
                <MatrixSVG data={[["g", "h"], ["i", "j"], ["k", "l"]]} />
              </div>

              <p>NOT Compatible:</p>
              <div className="matrix-svg-wrapper">
                <MatrixSVG data={[["a", "b", "c"], ["d", "e", "f"]]} />
                <MatrixSVG data={[["g", "h", "i"], ["j", "k", "l"]]} />
              </div>
            </div>

            {/* DIVISION */}
            <div className="operation-container">
              <h4>Division</h4>
              <p>Performed element-wise, so matrices must have the same dimensions.</p>

              <p>Compatible:</p>
              <div className="matrix-svg-wrapper">
                <MatrixSVG data={[["a", "b"], ["c", "d"]]} />
                <MatrixSVG data={[["e", "f"], ["g", "h"]]} />
              </div>

              <p>NOT Compatible:</p>
              <div className="matrix-svg-wrapper">
                <MatrixSVG data={[["a", "b"], ["c", "d"]]} />
                <MatrixSVG data={[["e", "f"], ["g", "h"], ["i", "j"]]} />
              </div>
            </div>
          </div>
        </section>

        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
