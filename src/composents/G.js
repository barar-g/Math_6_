import React, { useState } from 'react';

function App() {
  const [lines, setLines] = useState([]);
  const [drawing, setDrawing] = useState(false);

  const startLine = (e) => {
    setDrawing(true);
    setLines([...lines, { start: [e.clientX, e.clientY], end: [e.clientX, e.clientY] }]);
  };

  const moveLine = (e) => {
    if (!drawing) return;
    const newLines = [...lines];
    const currentLine = newLines[newLines.length - 1];
    currentLine.end = [e.clientX, e.clientY];
    setLines(newLines);
  };

  const endLine = () => {
    setDrawing(false);
  };

  const areParallel = () => {
    if (lines.length !== 2) return false;
    const line1 = lines[0];
    const line2 = lines[1];

    // Calculate slope
    const m1 = (line1.end[1] - line1.start[1]) / (line1.end[0] - line1.start[0]);
    const m2 = (line2.end[1] - line2.start[1]) / (line2.end[0] - line2.start[0]);

    return Math.abs(m1 - m2) < 0.01;  // Use a small threshold to consider floating-point precision
  }

  return (
    <div
      onMouseDown={startLine}
      onMouseMove={moveLine}
      onMouseUp={endLine}
      style={{ height: '80vh', border: '1px solid black', position: 'relative' }}
    >
      <svg style={{ width: '100%', height: '100%' }}>
        {lines.map((line, index) => (
          <line
            key={index}
            x1={line.start[0]} y1={line.start[1]}
            x2={line.end[0]} y2={line.end[1]}
            stroke="black"
          />
        ))}
      </svg>

      {lines.length === 2 && (
        <button onClick={() => alert(areParallel() ? "Les lignes sont parallèles!" : "Les lignes ne sont pas parallèles.")}>
          Vérifier
        </button>
      )}
    </div>
  );
}

export default App;
