import React from "react";
import Footer from "../components/Footer";
import "../styles/Lessons.css";

function MatrixSVG({ data }) {
  const cellSize = 45;
  const rows = data.length;
  const cols = data[0].length;

  const bracketPadding = 12;
  const bracketStroke = 3;
  const width = cols * cellSize + bracketPadding * 2;
  const height = rows * cellSize + bracketPadding * 2;

  return (
    <svg
      width={width + 20}
      height={height}
      style={{ margin: "20px 0" }}
    >

      <path
        d={`
          M ${bracketPadding} ${bracketPadding}
          L ${bracketPadding - 6} ${bracketPadding}
          L ${bracketPadding - 6} ${height - bracketPadding}
          L ${bracketPadding} ${height - bracketPadding}
        `}
        stroke="black"
        strokeWidth={bracketStroke}
        fill="none"
      />

      <path
        d={`
          M ${width - bracketPadding} ${bracketPadding}
          L ${width - bracketPadding + 6} ${bracketPadding}
          L ${width - bracketPadding + 6} ${height - bracketPadding}
          L ${width - bracketPadding} ${height - bracketPadding}
        `}
        stroke="black"
        strokeWidth={bracketStroke}
        fill="none"
      />

      {data.map((row, i) =>
        row.map((val, j) => {
          const x = bracketPadding + j * cellSize;
          const y = bracketPadding + i * cellSize;

          return (
            <g key={`${i}-${j}`}>
              <text
                x={x + cellSize / 2}
                y={y + cellSize / 2 + 6}
                textAnchor="middle"
                fontSize="20"
                fill="black"
              >
                {val}
              </text>
            </g>
          );
        })
      )}
    </svg>
  );
}

function Lessons() {
  return (
    <>
      <div className="page-container">
        <div className="Heading-section">        
          <h1>Lessons Page</h1>
          <p>Welcome to the Lessons page! Here you will find various lessons on linear algebra and matrix calculations.</p>
        </div>

        <div className="table-of-contents-section">
          <h2>Table of Contents</h2>
          <ul>
            <li><a href="#lesson1">Lesson 1: Introduction to Matrices</a></li>
            <li><a href="#lesson2">Lesson 2: Types of Matrices</a></li>
            <li><a href="#lesson3">Lesson 3: Matrix Operations</a></li>
            <li><a href="#lesson4">Lesson 4: Determinants and Inverses</a></li>
            <li><a href="#lesson5">Lesson 5: Applications of Matrices</a></li>
          </ul>
        </div>

        <div className="lesson-content-section" id="lesson1">
          <h2>Introduction to Matrices</h2>
          <p>A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns. Matrices are used to represent and manipulate data in various fields such as mathematics, physics, computer science, and engineering.</p>
          <MatrixSVG data={[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]} />
        </div>

        <div className="lesson-content-section" id="lesson2">
          <h2>Types of Matrices</h2>
          <p>There are several types of matrices, including square matrices, rectangular matrices, diagonal matrices, identity matrices, and zero matrices. Each type has its own properties and applications.</p>
        </div>

        <div className="lesson-content-section" id="lesson3">
          <h2>Matrix Operations</h2>
          <p>Common matrix operations include addition, subtraction, multiplication, and transposition. These operations follow specific rules and are essential for solving linear equations and performing transformations.</p>
        </div>

        <div className="lesson-content-section" id="lesson4">
          <h2>Determinants and Inverses</h2>
          <p>The determinant is a scalar value that can be computed from the elements of a square matrix. It provides important information about the matrix, such as whether it is invertible. The inverse of a matrix is another matrix that, when multiplied with the original matrix, yields the identity matrix.</p>
        </div>

        <div className="lesson-content-section" id="lesson5">
          <h2>Applications of Matrices</h2>
          <p>Matrices have numerous applications in various fields, including computer graphics, cryptography, economics, and engineering. They are used to model and solve complex problems involving multiple variables.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Lessons;
