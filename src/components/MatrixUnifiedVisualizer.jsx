import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "../styles/MatrixHeatmap.css"; // you can remove heatmap styles if unused

// ======================= 2D Linear Transformation =======================
function MatrixVisualizer2D({ inputVector, matrix }) {
  const m = matrix.map(row => row.map(Number));
  const [resultVector, setResultVector] = useState(null);

  useEffect(() => {
    if (inputVector && m) {
      const [x, y] = inputVector;
      setResultVector([
        x * m[0][0] + y * m[0][1],
        x * m[1][0] + y * m[1][1],
      ]);
    }
  }, [JSON.stringify(inputVector), JSON.stringify(matrix)]);

  const drawArrow = ([x, y], color) => (
    <line
      x1="150"
      y1="150"
      x2={150 + x * 50}
      y2={150 - y * 50}
      stroke={color}
      strokeWidth="3"
      markerEnd="url(#arrow)"
    />
  );

  const drawGrid = () => {
    const lines = [];
    for (let i = -5; i <= 5; i++) {
      lines.push(
        <line
          key={`h${i}`}
          x1={0}
          y1={150 - i * 50}
          x2={300}
          y2={150 - i * 50}
          stroke="#eee"
        />
      );
      lines.push(
        <line
          key={`v${i}`}
          x1={150 + i * 50}
          y1={0}
          x2={150 + i * 50}
          y2={300}
          stroke="#eee"
        />
      );
    }
    return lines;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Result of Transformation (2D)</h3>
      <svg width="300" height="300" style={{ border: "1px solid #ddd" }}>
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
          </marker>
        </defs>
        {drawGrid()}
        <line x1="0" y1="150" x2="300" y2="150" stroke="#ccc" />
        <line x1="150" y1="0" x2="150" y2="300" stroke="#ccc" />

        {resultVector && drawArrow(resultVector, "blue")}
      </svg>
    </div>
  );
}

// ======================= 3D Linear Transformation =======================
function Cube3D({ inputVector, matrix }) {
  const mesh = useRef();
  const [transformedVector, setTransformedVector] = useState(null);

  const applyMatrix = (v, m) =>
    new THREE.Vector3(
      v.x * m[0][0] + v.y * m[0][1] + v.z * m[0][2],
      v.x * m[1][0] + v.y * m[1][1] + v.z * m[1][2],
      v.x * m[2][0] + v.y * m[2][1] + v.z * m[2][2]
    );

  useEffect(() => {
    if (inputVector && matrix) {
      const vec = new THREE.Vector3(...inputVector.map(Number));
      setTransformedVector(applyMatrix(vec, matrix));
    }
  }, [JSON.stringify(inputVector), JSON.stringify(matrix)]);

  useFrame(() => {
    if (!mesh.current || !transformedVector) return;
    mesh.current.position.lerp(transformedVector, 0.2);
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

function Matrix3DVisualizer({ inputVector, matrix }) {
  const numeric = matrix.map(row => row.map(Number));
  if (!numeric || numeric.length !== 3 || numeric[0].length !== 3) return null;

  return (
    <div style={{ height: "400px", width: "100%", marginTop: "20px" }}>
      <h3 style={{ textAlign: "center" }}>Result of Transformation (3D)</h3>
      <Canvas camera={{ position: [4, 4, 4] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />
        <Cube3D inputVector={inputVector} matrix={numeric} />
        <OrbitControls />
        <gridHelper args={[10, 10]} />
        <axesHelper args={[2]} />
      </Canvas>
    </div>
  );
}

// ======================= Unified Component =======================
export default function MatrixUnifiedVisualizer({ inputVector, matrix }) {
  if (!matrix || matrix.length === 0 || !inputVector) return null;

  const rows = matrix.length;
  const cols = matrix[0].length;

  if (rows === 2 && cols === 2)
    return <MatrixVisualizer2D inputVector={inputVector} matrix={matrix} />;
  if (rows === 3 && cols === 3)
    return <Matrix3DVisualizer inputVector={inputVector} matrix={matrix} />;

  return null; // no heatmap anymore
}
