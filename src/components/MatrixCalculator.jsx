import { useState } from "react";
import "./App.css";

function MatrixCalculator() {
  
  const [matrixCount, setMatrixCount] = useState(2);
  const [matrices, setMatrices] = useState([]);
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  // generate matrices
  const generateMatrices = () => {
    const arr = [];
    for (let i = 0; i < matrixCount; i++) {
      arr.push({ rows: "", cols: "", values: [] });
    }
    setMatrices(arr);
    setResult(null);
    setOperation(null);
  };

  // size update
  const updateSize = (index, rows, cols) => {
    const updated = [...matrices];
    const r = Number(rows) || 0;
    const c = Number(cols) || 0;
    updated[index].rows = rows;
    updated[index].cols = cols;

    // if valid size
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

  // input
  const updateValue = (m, r, c, value) => {
    const updated = [...matrices];
    updated[m].values[r][c] = value;
    setMatrices(updated);
  };

  // check operations
  const canAddSubtractDivide =
    matrices.length > 1 &&
    matrices.every(
      (m) =>
        Number(m.rows) === Number(matrices[0].rows) &&
        Number(m.cols) === Number(matrices[0].cols]) &&
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

  // operation logic
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

  // reset
  const resetAll = () => {
    setMatrices([]);
    setMatrixCount(2);
    setOperation(null);
    setResult(null);
  };

  //UI
  return (
    <div>
      <h1>Matrix Calculator</h1>

      <div className="main-content">
        <h2>Welcome to the Matrix Calculator!</h2>
        <p>
          This application allows you to perform various matrix operations
          with ease.
        </p>
      </div>

      {/* number of matrices */}
      <label>Number of matrices:</label>
      <input
        type="number"
        value={matrixCount || ""}
        onChange={(e) => setMatrixCount(Number(e.target.value))}
        placeholder="e.g. 2"
      />
      <button onClick={generateMatrices}>Generate</button>

      {/* input UI */}
      {matrices.map((m, idx) => (
        <div key={idx} className="matrixBlock">
          <h3>Matrix {idx + 1}</h3>
          <div className="sizeRow">
            <input
              type="number"
              value={m.rows}
              placeholder="Rows"
              onChange={(e) => updateSize(idx, e.target.value, m.cols)}
            />
            <span style={{ margin: "0 5px" }}>x</span>
            <input
              type="number"
              value={m.cols}
              placeholder="Cols"
              onChange={(e) => updateSize(idx, m.rows, e.target.value)}
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
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/*operation buttons*/}
      <label>Operations:</label>
      <div className="opRow">
        <button
          disabled={!canAddSubtractDivide}
          onClick={() => performOperation("Add")}
        >
          Add
        </button>

        <button
          disabled={!canAddSubtractDivide}
          onClick={() => performOperation("Subtract")}
        >
          Subtract
        </button>

        <button
          disabled={!canMultiply}
          onClick={() => performOperation("Multiply")}
        >
          Multiply
        </button>

        <button
          disabled={!canAddSubtractDivide}
          onClick={() => performOperation("Divide")}
        >
          Divide
        </button>
      </div>

      {/* reset button */}
      <button onClick={resetAll}>Reset</button>

      {/* result */}
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
    </div>
  );
}

export default MatrixCalculator;
