import React from "react";
import Footer from "../components/Footer";
import "../styles/Lessons.css";
import MatrixSVG from "../components/MatrixSVG.jsx";

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
            <li><a href="#lesson1">Introduction to Matrices</a></li>
            <li><a href="#lesson2">Types of Matrices</a></li>
            <li><a href="#lesson3">Matrix Operations</a></li>
            <li><a href="#lesson4">Determinants and Inverses</a></li>
            <li><a href="#lesson5">Applications of Matrices</a></li>
          </ul>
        </div>

        <div className="lesson-content-section" id="lesson1">
          <h2>Introduction to Matrices</h2>
          <p>Matrices are rectangular arrays of numbers, symbols, or characters where all of these elements are arranged in each row and column.</p>
          <p>A matrix is identified by its order, which is given in the form of rows ⨯ and columns, and the location of each element is given by the row and column it belongs to.</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a11", "a12", "a13"],
    ["a21", "a22", "a23"],
    ["a31", "a32", "a33"]
  ]} />
  </div>
          <div className="source-link">
            <p>Source: <a href="https://www.geeksforgeeks.org/maths/introduction-to-matrices/" target="_blank" rel="noopener noreferrer">GeeksForGeeks</a></p>
          </div>
        </div>

        <div className="lesson-content-section" id="lesson2">
          <h2>Types of Matrices</h2>
          <p>There are several types of matrices, including square matrices, rectangular matrices, diagonal matrices, identity matrices, and more. Each type has its own properties and applications.</p>
          <h3>1. Singleton Matrix</h3>
          <p>A matrix that has only one element is called a singleton matrix. In this type of matrix number of columns and the number of rows is equal to 1. A singleton matrix is represented as [a]1⨯1.</p>
          <MatrixSVG data={[["a"]]} />
          <h3>2. Null Matrix</h3>
          <p>A matrix whose all elements are zero is called a Null Matrix. A null matrix is also called a Zero Matrix because all its elements are zero. An example of a null matrix is mentioned below:</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"]
  ]} />
          <MatrixSVG data={[
    ["0", "0"],
    ["0", "0"]
  ]} />
          <MatrixSVG data={[["0"]]} /></div>
          <h3>3. Row Matrix</h3>
          <p>A matrix that has only one row is called a Row Matrix. A row matrix is represented as [a1 a2 a3 ... an]1⨯n.</p>
          <div className="matrix-equation">
          <MatrixSVG data={[["a1", "a2", "a3", "a4"]]} /></div>
          <h3>4. Column Matrix</h3>
          <p>A matrix that has only one column is called a Column Matrix. A column matrix is represented as [[a1], [a2], [a3], ..., [an]]n⨯1.</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a1"],
    ["a2"],
    ["a3"],
    ["a4"]
  ]} /></div>
          <h3>5. Horizontal Matrix</h3>
          <p>A matrix in which the number of rows is less than the number of columns is called a Horizontal Matrix. A horizontal matrix is represented as m⨯n where m &lt; n.</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a11", "a12", "a13", "a14"],
    ["a21", "a22", "a23", "a24"]
  ]} /></div>
          <h3>6. Vertical Matrix</h3>
          <p>A matrix in which the number of rows is greater than the number of columns is called a Vertical Matrix. A vertical matrix is represented as m⨯n where m &gt; n.</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a11", "a12"],
    ["a21", "a22"],
    ["a31", "a32"],
    ["a41", "a42"]
  ]} /></div>
          <h3>7. Rectangular Matrix</h3>
          <p>A matrix in which the number of rows is not equal to the number of columns is called a Rectangular Matrix. A rectangular matrix is represented as m⨯n where m ≠ n.</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a11", "a12", "a13"],
    ["a21", "a22", "a23"]
  ]} /></div>
          <h3>8. Square Matrix</h3>
          <p>A matrix in which the number of rows is equal to the number of columns is called a Square Matrix. A square matrix is represented as n⨯n.</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a11", "a12"],
    ["a21", "a22"]
  ]} />
          <MatrixSVG data={[
    ["a11", "a12", "a13"],
    ["a21", "a22", "a23"],
    ["a31", "a32", "a33"]
  ]} /></div>
          <h3>9. Diagonal Matrix</h3>
          <p>A square matrix in which all the elements outside the main diagonal are zero is called a Diagonal Matrix. A diagonal matrix is represented as:</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["d1", "0", "0"],
    ["0", "d2", "0"],
    ["0", "0", "d3"]
  ]} /></div>
          <h3>10. Scalar Matrix</h3>
          <p>A diagonal matrix whose all diagonal elements are non-zero and the same is called a Scalar Matrix. Scalar Matrix is a kind of diagonal matrix where all diagonal elements are the same. Identity Matrix is a special case of Scalar Matrix.</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["k", "0", "0"],
    ["0", "k", "0"],
    ["0", "0", "k"]
  ]} /></div>
          <h3>11. Identity Matrix</h3>
          <p>A square matrix in which all the diagonal elements are 1 and all other elements are 0 is called an Identity Matrix. An identity matrix is represented as:</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["1", "0", "0"],
    ["0", "1", "0"],
    ["0", "0", "1"]
  ]} /></div>
          <h3>12. Upper Triangular Matrix</h3>
          <p>A square matrix in which all the elements below the main diagonal are zero is called an Upper Triangular Matrix. An upper triangular matrix is represented as:</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a11", "a12", "a13"],
    ["0", "a22", "a23"],
    ["0", "0", "a33"]
  ]} /></div>
          <h3>13. Lower Triangular Matrix</h3>
          <p>A square matrix in which all the elements above the main diagonal are zero is called a Lower Triangular Matrix. A lower triangular matrix is represented as:</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a11", "0", "0"],
    ["a21", "a22", "0"],
    ["a31", "a32", "a33"]
  ]} /></div>
          <h3>14. Symmetric Matrix</h3>
          <p>A square matrix that is equal to its transpose is called a Symmetric Matrix. In other words, a matrix A is symmetric if A = Aᵀ. An example of a symmetric matrix is mentioned below:</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a11", "a12", "a13"],
    ["a12", "a22", "a23"],
    ["a13", "a23", "a33"]
  ]} />
          <MatrixSVG data={[
    ["1", "2"],
    ["2", "1"]
  ]} /></div>
          <h3>15. Skew-Symmetric Matrix</h3>
          <p>A square matrix that is equal to the negative of its transpose is called a Skew-Symmetric Matrix. In other words, a matrix A is skew-symmetric if A = -Aᵀ. An example of a skew-symmetric matrix is mentioned below:</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["0", "a12", "a13"],
    ["-a12", "0", "a23"],
    ["-a13", "-a23", "0"]
  ]} />
          <MatrixSVG data={[
    ["0", "2", "3"],
    ["-2", "0", "4"],
    ["-3", "-4", "0"]
  ]} /></div>
          <h3>Boolean Matrix</h3>
          <p>A matrix in which all the elements are either 0 or 1 is called a Boolean Matrix. Boolean matrices are used in various applications such as graph theory, computer science, and logic.</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["1", "0", "1"],
    ["0", "1", "0"],
    ["1", "1", "0"]
  ]} /></div>
          <div className="source-link">
            <p>Source: <a href="https://www.geeksforgeeks.org/maths/types-of-matrices/" target="_blank" rel="noopener noreferrer">GeeksForGeeks</a></p>
          </div>
        </div>

        <div className="lesson-content-section" id="lesson3">
          <h2>Matrix Operations</h2>
          <p>Common matrix operations include addition, subtraction, multiplication, and transposition. These operations follow specific rules and are essential for solving linear equations and performing transformations.</p>
          <h3>1. Matrix Addition</h3>
          <p>The addition of matrices is one of the basic operations that is performed on matrices. Two or more matrices of the same order can be added by adding the corresponding elements of the matrices. If A = [aij] and B = [bij] are two matrices with the same dimension, that is, they have the same number of rows and columns, then the addition of matrices A and B is: A+B = [aij] + [bij] = [aij+bij].</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a11", "a12", "a13"],
    ["a21", "a22", "a23"],
    ["a31", "a32", "a33"]
  ]} />

  <div className="operation-sign">+</div>
          <MatrixSVG data={[
    ["b11", "b12", "b13"],
    ["b21", "b22", "b23"],
    ["b31", "b32", "b33"]
  ]} />
  <div className="operation-sign">=</div>
          <MatrixSVG data={[
    ["a11+b11", "a12+b12", "a13+b13"],
    ["a21+b21", "a22+b22", "a23+b23"],
    ["a31+b31", "a32+b32", "a33+b33"]
  ]} />   </div>

  <h4>Example:</h4>
  <div className="matrix-equation">
  <MatrixSVG data={[
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
  ]} />
  <div className="operation-sign">+</div>
          <MatrixSVG data={[
    ["9", "8", "7"],
    ["6", "5", "4"],
    ["3", "2", "1"]
  ]} />
  <div className="operation-sign">=</div>
          <MatrixSVG data={[
    ["10", "10", "10"],
    ["10", "10", "10"],
    ["10", "10", "10"]
  ]} /></div>
          <h3>2. Matrix Subtraction</h3>
          <p>Subtraction of matrices is a matrix operation of element-wise subtraction of matrices of the same order, that is, matrices that have the same number of rows and columns. In subtracting two matrices, we subtract the elements in each row and column, from the respective elements in the row and column of another matrix.</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a11", "a12", "a13"],
    ["a21", "a22", "a23"],
    ["a31", "a32", "a33"]
  ]} />
  <div className="operation-sign">−</div>
          <MatrixSVG data={[
    ["b11", "b12", "b13"],
    ["b21", "b22", "b23"],
    ["b31", "b32", "b33"]
  ]} />
  <div className="operation-sign">=</div>
          <MatrixSVG data={[
    ["a11-b11", "a12-b12", "a13-b13"],
    ["a21-b21", "a22-b22", "a23-b23"],
    ["a31-b31", "a32-b32", "a33-b33"]
  ]} /></div>
  <h4>Example:</h4>
  <div className="matrix-equation">
  <MatrixSVG data={[
    ["9", "8", "7"],
    ["6", "5", "4"],
    ["3", "2", "1"]
  ]} />
  <div className="operation-sign">−</div>
          <MatrixSVG data={[
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
  ]} />
  <div className="operation-sign">=</div>
          <MatrixSVG data={[
    ["8", "6", "4"],
    ["2", "0", "-2"],
    ["-4", "-6", "-8"]
  ]} /></div>
          <h3>3. Matrix Multiplication</h3>
          <p>Matrix multiplication is a binary operation that produces a matrix from two matrices. For matrix multiplication, the number of columns in the first matrix must be equal to the number of rows in the second matrix. If A is an m⨯n matrix and B is an n⨯p matrix, then their product AB is an m⨯p matrix. The element in the ith row and jth column of the product matrix is obtained by multiplying the elements of the ith row of A with the corresponding elements of the jth column of B and summing the results.</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a", "b", "c"],
    ["d", "e", "f"]
  ]} />
  <div className="operation-sign">×</div>
          <MatrixSVG data={[
    ["g", "h"],
    ["i", "j"],
    ["k", "l"]
  ]} />
  <div className="operation-sign">=</div>
          <MatrixSVG data={[
    ["ag + bi + ck", "ah + bj + cl"],
    ["dg + ei + fk", "dh + ej + fl"]
  ]} /></div>
  <h4>Example:</h4>
  <div className="matrix-equation">
  <MatrixSVG data={[
    ["1", "2", "3"],
    ["4", "5", "6"]
  ]} />
  <div className="operation-sign">×</div>
          <MatrixSVG data={[
    ["7", "8"],
    ["9", "10"],
    ["11", "12"]
  ]} />
  <div className="operation-sign">=</div>
          <MatrixSVG data={[
    ["1*7 + 2*9 + 3*11", "1*8 + 2*10 + 3*12"],
    ["4*7 + 5*9 + 6*11", "4*8 + 5*10 + 6*12"]
  ]} />
  <div className="operation-sign">=</div>
          <MatrixSVG data={[
    ["58", "64"],
    ["139", "154"]
  ]} /></div>
        <div className="source-link">
            <p>Source: <a href="https://www.cuemath.com/algebra/matrix-operations/" target="_blank" rel="noopener noreferrer">CueMath</a></p>
          </div>
        </div>

        <div className="lesson-content-section" id="lesson4">
          <h2>Determinants and Inverses</h2>
          <p>The determinant is a scalar value that can be computed from the elements of a square matrix. It provides important information about the matrix, such as whether it is invertible. The inverse of a matrix is another matrix that, when multiplied with the original matrix, yields the identity matrix.</p>
          <h3>1. Determinant of a matrix</h3>
          <p>The determinant is a special number that can be calculated from a square matrix. It is denoted as det(A) or |A| for a matrix A. The determinant provides important information about the matrix, such as whether it is invertible (non-singular) or not (singular).</p>
          <h4>2 x 2</h4>
          <p>For a 2 x 2 matrix A = [[a, b], [c, d]], the determinant is calculated as:</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a", "b"],
    ["c", "d"]
  ]} />
          <div className="operation-sign">=</div>
          <MatrixSVG data={[["ad - bc"]]} /></div>
          <h4>Example:</h4>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["3", "8"],
    ["4", "6"]
  ]} />
          <div className="operation-sign">=</div>
          <MatrixSVG data={[["(3)(6) - (8)(4) = 18 - 32 = -14"]]} /></div>
          <h3>det(A) = -14</h3>
          <h4>3 x 3</h4>
          <p>For a 3 x 3 matrix A = [[a, b, c], [d, e, f], [g, h, i]], the determinant is calculated as:</p>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ]} />
          <div className="operation-sign">=</div>
          <MatrixSVG data={[["a(ei - fh) - b(di - fg) + c(dh - eg)"]]} /></div>
          <h4>Example:</h4>
          <div className="matrix-equation">
          <MatrixSVG data={[
    ["1", "2", "3"],
    ["0", "4", "5"],
    ["1", "0", "6"]
  ]} />
          <div className="operation-sign">=</div>
          <MatrixSVG data={[["1(4*6 - 5*0) - 2(0*6 - 5*1) + 3(0*0 - 4*1)"]]} />
          <div className="operation-sign">=</div>
          <MatrixSVG data={[["24 + 10 - 12 = 22"]]} /></div>
          <h3>det(A) = 22</h3>
          <div className="source-link">
            <p>Source: <a href="https://www.mathsisfun.com/algebra/matrix-determinant.html" target="_blank" rel="noopener noreferrer">MathIsFun</a></p>
          </div>
        </div>

        <div className="lesson-content-section" id="lesson5">
          <h2>Applications of Matrices</h2>
          <p>Matrices have numerous applications in various fields, including computer graphics, cryptography, and more. They are used to model and solve complex problems involving multiple variables.</p>
          <h3>1. Computer Graphics</h3>
          <p>Traditionally, architecture, cartoons, and automation were created through hand drawings, but today computer graphics handle these tasks. In this field, square matrices are essential because they represent linear transformations and help project 3D objects onto 2D planes. Digital images themselves are treated as matrices, where each pixel’s position corresponds to a matrix entry and its numerical value represents colour. Matrices play a key role in video game graphics for manipulating points and are also used to represent graphs, with rows and columns indicating nodes and their intersections showing connection strength. Common matrix operations in graphics include translation, rotation, and scaling.</p>
          <div className="application-image">
            <img src="#" />
            </div>
          <h3>2. Cryptography</h3>
          <p>Cryptography protects data by encrypting it so only authorized users can access it. Early satellite video signals were unencrypted, allowing anyone with a dish to view them, which caused financial losses for providers. To prevent this, video signals began to be encrypted using invertible keys; if a key isn’t invertible, the original signal cannot be recovered. Matrix-based methods are used in this process, where digital audio or video signals are represented as numerical sequences and processed through filtering techniques involving matrix multiplication.</p>
          <div className="application-image">
            <img src="#" />
            </div>
          <h3>3. Wireless Communication</h3>
          <p>Matrices are essential in modeling, optimizing, detecting, and processing wireless signals. Signal information is often embedded in matrix form, making matrices vital for tasks like signal estimation, detection, and adaptive filter design. They also play a significant role in digital image processing. In wireless communication and sensor array signal processing—important fields in telecommunications—matrices help determine the number and location of signal sources. This is crucial in applications such as radar and underwater surveillance, where the challenge is to detect and locate radiating sources using spatial and temporal data collected from sensors.</p>
          <div className="application-image">
            <img src="#" />
            </div>
            <h3>4. Science</h3>
            <p>Matrices are used in the science of optics to account for reflection and for refraction. Matrices are also useful in electrical circuits and quantum mechanics and resistor conversion of electrical energy. Matrices are used to solve AC network equations in electric circuits.</p>
            <div className="application-image">
            <img src="#" />
            </div>
          <div className="source-link">
            <h3>5. MAthematics</h3>
            <p>The application of matrices in mathematics has  an extended history of application in solving linear equations. Matrices are incredibly useful things that happen in many various applied areas. The application of matrices in mathematics applies to many branches of science, also as different mathematical disciplines. Engineering Mathematics is applied in our daily life.</p>
            <div className="application-image">
            <img src="#" />
            </div>
            <h3>6. Commerce</h3>
            <p>Matrix Cramer's Rule and determinants are useful tools for resolving various problems in business and economics involving profit maximisation and loss minimization. Variance and covariance are calculated using matrices. With the use of a matrix determinant, Matrix Cramer's Rule is utilised to find solutions to linear equations. The IS-LM model's market equilibrium is solved with determinants and Matrix Cramer's Rule.</p>
            <div className="application-image">
            <img src="#" />
            </div>
            <p>Source: <a href="https://www.vedantu.com/maths/application-of-matrices" target="_blank" rel="noopener noreferrer">Vedantu</a></p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Lessons;
