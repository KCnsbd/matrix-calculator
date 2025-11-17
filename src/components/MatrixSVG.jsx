import { useMemo } from "react";

function MatrixSVG({ data }) {
  // 1. Measure maximum text width using a canvas
  const cellSize = useMemo(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "20px sans-serif";

    let maxWidth = 0;

    data.forEach(row => {
      row.forEach(val => {
        const w = ctx.measureText(String(val)).width;
        if (w > maxWidth) maxWidth = w;
      });
    });

    // Add some padding inside the cell
    const padded = maxWidth + 20;

    // Never go below 40
    return Math.max(40, padded);
  }, [data]);

  const rows = data.length;
  const cols = data[0].length;

  const bracketPadding = 12;
  const bracketStroke = 3;

  const width = cols * cellSize + bracketPadding * 2;
  const height = rows * cellSize + bracketPadding * 2;

  return (
    <svg width={width + 20} height={height} style={{ margin: "20px 0" }}>
      {/* Left bracket */}
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

      {/* Right bracket */}
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

      {/* Matrix values */}
      {data.map((row, i) =>
        row.map((val, j) => {
          const x = bracketPadding + j * cellSize;
          const y = bracketPadding + i * cellSize;

          return (
            <text
              key={`${i}-${j}`}
              x={x + cellSize / 2}
              y={y + cellSize / 2 + 6}
              textAnchor="middle"
              fontSize="20"
              fill="black"
            >
              {val}
            </text>
          );
        })
      )}
    </svg>
  );
}

export default MatrixSVG;
