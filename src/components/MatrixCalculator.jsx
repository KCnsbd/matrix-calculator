import { useState } from "react";
import MatrixUnifiedVisualizer from "./MatrixUnifiedVisualizer";
import "../styles/MatrixCalculator.css";

function MatrixCalculator() {
  const [matrixCount, setMatrixCount] = useState(2);
  const [matrices, setMatrices] = useState([]);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  // Generate matrices
  const generateMatrices = () => {
    const arr = [];
    for (let i = 0; i < matrixCount; i++) {
      arr.push({ rows: "", cols: "", values: [] });
    }
    setMatrices(arr);
    setResult(null);
    setOperation(null);
  };

  // Update size
  const updateSize = (index, rows, cols) => {
    const updated = [...matrices];
    const r = Number(rows) || 0;
    const c = Number(cols) || 0;
    updated[index].rows = rows;
    updated[index].cols = cols;

    if (r > 0 && c > 0) {
      updated[index].values = Array.from({ length: r }, (_, rIndex) =>
        Array.from(
          { length: c },
          (_, cIndex) => updated[index].values[rIndex]?.[cIndex] || ""
        )
      );
    }
    setMatrices(updated);
  };

  // Update value
  const updateValue = (m, r, c, value) => {
    const updated = [...matrices];
    updated[m].values[r][c] = value;
    setMatrices(updated);
  };

  // Check operations
  const canAddSubtractDivide =
    matrices.length > 1 &&
    matrices.every(
      (m) =>
        Number(m.rows) === Number(matrices[0].rows) &&
        Number(m.cols) === Number(matrices[0].cols) &&
        Number(m.rows) > 0 &&
        Number(m.cols) > 0
    );

  const canMultiply =
    matrices.length > 1 &&
    matrices.every((m, i) =>
      i === matrices.length - 1
        ? true
        : Number(m.cols) === Number(matrices[i + 1].rows) &&
          Number(m.rows) > 0 &&
          Number(m.cols) > 0
    );

  // Perform operation
  const performOperation = (op) => {
    let res = null;
    const mats = matrices.map((m) =>
      m.values.map((row) => row.map((v) => Number(v) || 0))
    );

    if (op === "Add") {
      res = mats.reduce((A, B) =>
        A.map((row, r) => row.map((val, c) => val + B[r][c]))
      );
    }

    if (op === "Subtract") {
      res = mats.reduce((A, B) =>
        A.map((row, r) => row.map((val, c) => val - B[r][c]))
      );
    }

    if (op === "Multiply") {
      const multiplyTwo = (A, B) => {
        const R = A.length;
        const C = B[0].length;
        const K = B.length;
        const result = Array.from({ length: R }, () => Array(C).fill(0));

        for (let r = 0; r < R; r++) {
          for (let c = 0; c < C; c++) {
            for (let k = 0; k < K; k++) {
              result[r][c] += A[r][k] * B[k][c];
            }
          }
        }
        return result;
      };
      res = mats.reduce((A, B) => multiplyTwo(A, B));
    }

    if (op === "Divide") {
      res = mats.reduce((A, B) =>
        A.map((row, r) =>
          row.map((val, c) => (B[r][c] !== 0 ? val / B[r][c] : "∞"))
        )
      );
    }

    setOperation(op);
    setResult(res);
  };

  // Reset
  const resetAll = () => {
    setMatrices([]);
    setMatrixCount(2);
    setOperation(null);
    setResult(null);
  };

  return (
    <div className="container">
      <h1>Matrix Calculator</h1>

      <div className="main-content">
        <p>This application allows you to perform various matrix operations with ease.</p>
      </div>

      {/* Number of matrices */}
      <div className="calculator-wrapper">
      <div>
        <label>Number of matrices:</label>
        <input
          type="number"
          value={matrixCount || ""}
          onChange={(e) => setMatrixCount(Number(e.target.value))}
          placeholder="e.g. 2"
          className="countInput"
        />
        <button className="button" onClick={generateMatrices}>
          Generate
        </button>
      </div>

      {/* Input UI */}
      {matrices.map((m, idx) => (
        <div key={idx} className="matrixBlock">
          <h3>Matrix {idx + 1}</h3>
          <div className="sizeRow">
            <input
              type="number"
              value={m.rows}
              placeholder="Rows"
              onChange={(e) => updateSize(idx, e.target.value, m.cols)}
              className="sizeInput"
            />
            <span style={{ margin: "0 5px" }}>x</span>
            <input
              type="number"
              value={m.cols}
              placeholder="Cols"
              onChange={(e) => updateSize(idx, m.rows, e.target.value)}
              className="sizeInput"
            />
          </div>

          <div className="matrixScroll">
            {m.values.map((row, r) => (
              <div key={r} className="row">
                {row.map((val, c) => (
                  <input
                    key={c}
                    type="number"
                    value={val}
                    onChange={(e) => updateValue(idx, r, c, e.target.value)}
                    className="cell"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Operation buttons */}
      <label>Operations:</label>
      <div className="opRow">
        <button
          className={`opButton ${!canAddSubtractDivide ? "disabled" : ""}`}
          disabled={!canAddSubtractDivide}
          onClick={() => performOperation("Add")}
        >
          Add
        </button>

        <button
          className={`opButton ${!canAddSubtractDivide ? "disabled" : ""}`}
          disabled={!canAddSubtractDivide}
          onClick={() => performOperation("Subtract")}
        >
          Subtract
        </button>

        <button
          className={`opButton ${!canMultiply ? "disabled" : ""}`}
          disabled={!canMultiply}
          onClick={() => performOperation("Multiply")}
        >
          Multiply
        </button>

        <button
          className={`opButton ${!canAddSubtractDivide ? "disabled" : ""}`}
          disabled={!canAddSubtractDivide}
          onClick={() => performOperation("Divide")}
        >
          Divide
        </button>
      </div>

      {/* Reset button */}
      <button className="button" onClick={resetAll}>
        Reset
      </button>
      </div>

      {/* Result */}
      {result && (
        <div className="resultBox">
          <h3>Result ({operation})</h3>
          <div className="matrixScroll">
            {result.map((row, r) => (
              <div key={r} className="row">
                {row.map((val, c) => (
                  <div key={c} className="resultCell">
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Visualizer */}
      {matrices[0] && <MatrixUnifiedVisualizer matrix={matrices[0].values} />}
    </div>
  );
}

export default MatrixCalculator;