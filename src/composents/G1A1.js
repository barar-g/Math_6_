import styled from 'styled-components';
import ReplyIcon from '@mui/icons-material/Reply';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { Button } from '@mui/material';

const GRID_SIZE = 20; // Espace entre les lignes de la grille en pixels
const GRID_COLOR = "#E0E0E0"; // Couleur des lignes de la grille


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const ButtonContainer = styled.div`
  margin: 20px;
`;

const Canvas = styled.div`
  height: 50vh;
  border: 2px solid black;
  position: relative;
  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const StyledText = styled.div`
box-sizing: border-box;
width: 100%; 
height: 80%; 


transition: background-color 0.4s, transform 0.3s;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
font-size: 1em;
font-family: 'Comic Sans MS', sans-serif;
&:hover {
    transform: scale(1.05);
}
`;

const Card = styled.div`
  background-color: white;
  width : 90%;
  padding: 20px;
  border-radius: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #E1F5FE;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

function App() {
  const [lines, setLines] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [checkMode, setCheckMode] = useState('parallel'); // 'parallel', 'perpendicular'
  const [message, setMessage] = useState('Tracez deux lignes parallel');

  const getRelativeCoordinates = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };
  
  const colors = ['#FF1744', '#00E676', '#651FFF', '#FF9100', '#E1F5FE']; // Palette de couleurs



const [currentColor, setCurrentColor] = useState(0);

const getNextColor = () => {
  setCurrentColor((currentColor + 1) % colors.length);
};

  const startLine = (e) => {
    if (e.target.tagName === "BUTTON") return;  // Ensure we don't start drawing when clicking on the button
  
    const coords = getRelativeCoordinates(e);
    setDrawing(true);
    setLines([...lines, { start: [coords.x, coords.y], end: [coords.x, coords.y] }]);
  };
  

  const moveLine = (e) => {
    if (!drawing) return;
    const coords = getRelativeCoordinates(e);
    
    const newLines = [...lines];
    const currentLine = newLines[newLines.length - 1];
    currentLine.end = [coords.x, coords.y];
    setLines(newLines);
  };
  

  const endLine = () => {
    setDrawing(false);
  };

  // ... [le reste de votre code]

const THRESHOLD = 0.1; // Correspond à 5% de tolérance

const areParallel = () => {
    if (lines.length !== 2) return false;

    const line1 = lines[0];
    const line2 = lines[1];

    // Calculate slopes
    const deltaY1 = line1.end[1] - line1.start[1];
    const deltaX1 = line1.end[0] - line1.start[0];

    const deltaY2 = line2.end[1] - line2.start[1];
    const deltaX2 = line2.end[0] - line2.start[0];

    // Check for vertical lines
    if (deltaX1 === 0 && deltaX2 === 0) {
        return true; // Both lines are vertical and parallel
    }

    if (deltaX1 === 0 || deltaX2 === 0) {
        return false; // Only one line is vertical
    }

    const m1 = deltaY1 / deltaX1;
    const m2 = deltaY2 / deltaX2;

    // Check if slopes are close enough to be considered equal
    return Math.abs(m1 - m2) <= THRESHOLD;
};

const arePerpendicular = () => {
    if (lines.length !== 2) return false;

    const line1 = lines[0];
    const line2 = lines[1];

    const deltaY1 = line1.end[1] - line1.start[1];
    const deltaX1 = line1.end[0] - line1.start[0];

    const deltaY2 = line2.end[1] - line2.start[1];
    const deltaX2 = line2.end[0] - line2.start[0];

 // La valeur de tolérance pour décider si une ligne est proche d'être horizontale ou verticale
const MARGIN = 5;  // 5 pixels de tolérance, par exemple

// Si une ligne est approximativement verticale et l'autre approximativement horizontale
if ((Math.abs(deltaX1) < MARGIN && Math.abs(deltaY2) < MARGIN) || (Math.abs(deltaY1) < MARGIN && Math.abs(deltaX2) < MARGIN)) {
    return true;
}

// Si une ligne est approximativement verticale/horizontale et l'autre non
if ((Math.abs(deltaX1) < MARGIN && Math.abs(deltaY2) >= MARGIN) || (Math.abs(deltaY1) < MARGIN && Math.abs(deltaX2) >= MARGIN) || (Math.abs(deltaX1) >= MARGIN && Math.abs(deltaY2) < MARGIN) || (Math.abs(deltaY1) >= MARGIN && Math.abs(deltaX2) < MARGIN)) {
    return false;
}


    

    const m1 = deltaY1 / deltaX1;
    const m2 = deltaY2 / deltaX2;

    return Math.abs(m1 * m2 + 1) < THRESHOLD;
};

const Canvas = styled.div`
  height: 50vh;
  width : 40vh;
  background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')}; // Jaune pour actif, bleu clair sinon
  border: 1px solid #B0BEC5; // Ajout d'une bordure gris bleuâtre
  position: relative;
  cursor: pointer; // Changement de curseur pour indiquer une zone interactive

  &:hover {
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5); // Lumière brillante lors du survol
  }

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

  
  
  
const handleCheck = () => {
    if (checkMode === 'parallel') {
      if (areParallel()) {
        setMessage(<span style={{ color: 'green' }}>Correct! Maintenant, tracez deux lignes perpendiculaires.</span>);

        setCheckMode('perpendicular');
      } else {
        setMessage(<span style={{ color: 'red' }}>Incorrect! Les lignes ne sont pas parallèles. Repeter</span>);
      }
    } else if (checkMode === 'perpendicular') {
      if (arePerpendicular()) {
        setMessage(<span style={{ color: 'green' }}>Correct! Les lignes sont perpendiculaires!</span>);
        setCheckMode('reset');
      } else {
        setMessage(<span style={{ color: 'red' }}>Incorrect! Les lignes ne sont pas perpendiculaires. Repetez.</span>);

      }
    }
    setLines([]);  
};

  
  const handleReset = () => {
    setCheckMode('parallel');
    setLines([]);
    setMessage("Tracez deux lignes parallel")
  };

  return (
    <Container>
       <div className="messageContainer" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
   
    <Card>
        <StyledText>{message}</StyledText>
    </Card>
</div>

  <br/>
  <br/>

    <Canvas
  onMouseDown={startLine}
  onMouseMove={moveLine}
  onMouseUp={endLine}
>
  <svg style={{ width: '100%', height: '100%' }}>
    {/* Génération des lignes de la grille */}
    {Array.from({ length: 50 }).map((_, index) => (
      <>
        {/* Ligne verticale */}
        <line
          key={`v-${index}`}
          x1={index * GRID_SIZE}
          y1={0}
          x2={index * GRID_SIZE}
          y2="100%"
          stroke={GRID_COLOR}
          strokeWidth="1"
        />
        {/* Ligne horizontale */}
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

    {/* Lignes tracées par l'utilisateur */}
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
  </svg>
</Canvas>

    <ButtonContainer>
    {checkMode !== 'reset' && lines.length === 2 && (
      <Button variant='contained' onClick={handleCheck}>
        <CheckIcon /> 
      </Button>
    )}
    {checkMode === 'reset' && (
      <Button variant='contained' onClick={handleReset}>
        <ReplyIcon/> 
      </Button>
    )}
    </ButtonContainer>
   
  </Container>
  );
}

export default App;
