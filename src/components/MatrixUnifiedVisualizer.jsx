import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "../styles/MatrixHeatmap.css";

// ======================= 2D Linear Transformation =======================
function MatrixVisualizer2D({ matrix }) {
  const m = matrix.map(row => row.map(Number));
  const [prevVectors, setPrevVectors] = useState(null);
  const [currentVectors, setCurrentVectors] = useState(null);

  const basis = [
    [1, 0],
    [0, 1]
  ];

  const transform = vecs =>
    vecs.map(([x, y]) => [x * m[0][0] + y * m[0][1], x * m[1][0] + y * m[1][1]]);

  useEffect(() => {
    setPrevVectors(currentVectors);
    setCurrentVectors(transform(basis));
  }, [JSON.stringify(matrix)]);

  const drawArrow = ([x, y], color) => (
    <line key={color} x1="150" y1="150" x2={150 + x * 50} y2={150 - y * 50} stroke={color} strokeWidth="3" markerEnd="url(#arrow)" />
  );

  const drawGrid = () => {
    const lines = [];
    for (let i = -5; i <= 5; i++) {
      lines.push(<line key={`h${i}`} x1={0} y1={150 - i * 50} x2={300} y2={150 - i * 50} stroke="#eee" />);
      lines.push(<line key={`v${i}`} x1={150 + i * 50} y1={0} x2={150 + i * 50} y2={300} stroke="#eee" />);
    }
    return lines;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Matrix A Visualization (2×2)</h3>
      <svg width="300" height="300" style={{ border: "1px solid #ddd" }}>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
          </marker>
        </defs>
        {drawGrid()}
        <line x1="0" y1="150" x2="300" y2="150" stroke="#ccc" />
        <line x1="150" y1="0" x2="150" y2="300" stroke="#ccc" />

        {currentVectors && currentVectors.map((v, i) => drawArrow(v, i===0?"red":"blue"))}
      </svg>
    </div>
  );
}

// ======================= 3D Linear Transformation =======================
function Cube3D({ matrix }) {
  const mesh = useRef();
  const [transformedVertices, setTransformedVertices] = useState([]);

  const basis = [
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0, 1)
  ];

  const applyMatrix = (v, m) => new THREE.Vector3(
    v.x * m[0][0] + v.y * m[0][1] + v.z * m[0][2],
    v.x * m[1][0] + v.y * m[1][1] + v.z * m[1][2],
    v.x * m[2][0] + v.y * m[2][1] + v.z * m[2][2]
  );

  useEffect(() => {
    const geom = new THREE.BoxGeometry(1, 1, 1);
    const pos = geom.attributes.position;
    const newPos = [];
    for (let i = 0; i < pos.array.length; i += 3) {
      const v = new THREE.Vector3(pos.array[i], pos.array[i+1], pos.array[i+2]);
      const t = applyMatrix(v, matrix);
      newPos.push(t.x, t.y, t.z);
    }
    setTransformedVertices(newPos);
  }, [matrix]);

  useFrame(() => {
    if (!mesh.current || !transformedVertices.length) return;
    const pos = mesh.current.geometry.attributes.position;
    for (let i = 0; i < pos.array.length; i++) {
      pos.array[i] = pos.array[i] * 0.8 + transformedVertices[i] * 0.2;
    }
    pos.needsUpdate = true;
  });

  // Basis arrows
  const arrowHelper = (dir, color) => {
    const length = 1.5;
    const origin = new THREE.Vector3(0,0,0);
    return <primitive object={new THREE.ArrowHelper(dir.clone().normalize(), origin, length, color)} />;
  }

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color="skyblue" wireframe />
    </mesh>
  );
}

function Matrix3DVisualizer({ matrix }) {
  const numeric = matrix.map(row => row.map(Number));
  if (!numeric || numeric.length !== 3 || numeric[0].length !== 3) return null;

  return (
    <div style={{ height: "400px", width: "100%", marginTop: "20px" }}>
      <h3 style={{textAlign:"center"}}>Matrix A Visualization (3×3)</h3>
      <Canvas camera={{ position: [4,4,4] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} />
        <Cube3D matrix={numeric} />
        <OrbitControls />
        <gridHelper args={[10,10]} />
        <axesHelper args={[2]} />
      </Canvas>
    </div>
  );
}

// ======================= Heatmap =======================
function MatrixHeatmap({ matrix }) {
  if (!matrix || matrix.length === 0) return null;

  const numeric = matrix.map(row => row.map(Number));
  const flat = numeric.flat();
  const min = Math.min(...flat);
  const max = Math.max(...flat);

  const color = value => {
    const t = (value - min)/(max-min ||1);
    const hue = 240 - t*240;
    return `hsl(${hue},85%,55%)`;
  };

  return (
    <div style={{textAlign:"center", marginTop:"20px"}}>
      <h3>Heatmap Visualization</h3>
      <div className="heatmap-container">
        {numeric.map((row,r)=>(
          <div className="heatmap-row" key={r}>
            {row.map((val,c)=>(
              <div className="heatmap-cell" key={c} style={{backgroundColor:color(val), animation:"fadeIn .4s"}}>
                {val}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ======================= Unified Component =======================
export default function MatrixUnifiedVisualizer({ matrix }) {
  if (!matrix || matrix.length === 0) return null;

  const rows = matrix.length;
  const cols = matrix[0].length;

  if (rows === 2 && cols === 2) return <MatrixVisualizer2D matrix={matrix} />;
  if (rows === 3 && cols === 3) return <Matrix3DVisualizer matrix={matrix} />;
  return <MatrixHeatmap matrix={matrix} />;
}
