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

export default MatrixSVG;