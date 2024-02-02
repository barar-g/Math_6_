function UserLines({ lines, currentColor, colors }) {
    return (
      <>
        {lines.map((line, index) => (
          <line
            key={index}
            x1={line.start[0]} 
            y1={line.start[1]}
            x2={line.end[0]} 
            y2={line.end[1]}
            stroke={colors[currentColor]}
            strokeWidth="3"
          />
        ))}
      </>
    );
  }
  
  export default UserLines;
  