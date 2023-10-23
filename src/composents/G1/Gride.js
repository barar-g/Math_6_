import styled from 'styled-components';

const GRID_SIZE = 20; 
const GRID_COLOR = "#E0E0E0"; 

function Grid() {
  return (
    <>
      {Array.from({ length: 50 }).map((_, index) => (
        <>
          <line
            key={`v-${index}`}
            x1={index * GRID_SIZE}
            y1={0}
            x2={index * GRID_SIZE}
            y2="100%"
            stroke={GRID_COLOR}
            strokeWidth="1"
          />
          <line
            key={`h-${index}`}
            x1={0}
            y1={index * GRID_SIZE}
            x2="100%"
            y2={index * GRID_SIZE}
            stroke={GRID_COLOR}
            strokeWidth="1"
          />
        </>
      ))}
    </>
  );
}

export default Grid;
