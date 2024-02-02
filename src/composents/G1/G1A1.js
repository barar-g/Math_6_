import { useState } from 'react';
import { Container, StyledText, Card, Canvas } from '../Styles/MajorStyles';
import Grid from './Gride';
import Controls from './Controle';
import UserLines from './UserLines';
import { Button } from '@mui/material';




function App() {
  const [lines, setLines] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [checkMode, setCheckMode] = useState('parallel');
  const [message, setMessage] = useState('Tracez deux lignes parallèles');

  const calculateDistance = (start, end) => {
    const dx = start[0] - end[0];
    const dy = start[1] - end[1];
    return Math.sqrt(dx * dx + dy * dy);
};


  const getRelativeCoordinates = (e, targetElement) => {
    const rect = targetElement.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  function disableScrolling() {
    document.body.style.overflow = 'hidden';
}

function enableScrolling() {
  document.body.style.overflow = '';
}

  

  const colors = ['#FF1744', '#00E676', '#651FFF', '#FF9100', '#E1F5FE'];
  const [currentColor, setCurrentColor] = useState(0);

  const startLine = (e) => {
    disableScrolling();
    if (e.target.tagName === "BUTTON") return;
  
    let coords;
    if (e.type === "touchstart") {
      const touch = e.touches[0];
      coords = getRelativeCoordinates(touch, e.currentTarget);
    } else {
      coords = getRelativeCoordinates(e, e.currentTarget);
    }
  
    setDrawing(true);
    setLines([...lines, { start: [coords.x, coords.y], end: [coords.x, coords.y] }]);
  };
  
  const moveLine = (e) => {
    if (!drawing) return;
    disableScrolling();
    const coords = e.type === "touchmove" ? e.touches[0] : e;
    const relativeCoords = getRelativeCoordinates(coords, e.currentTarget);
  
    const newLines = [...lines];
    const currentLine = newLines[newLines.length - 1];
    currentLine.end = [relativeCoords.x, relativeCoords.y];
    setLines(newLines);
  };
  

  const MIN_LINE_LENGTH = 30; // Ici, 10 pixels, mais vous pouvez ajuster cette valeur selon vos besoins

  const endLine = () => {
      setDrawing(false);
      enableScrolling();
  
      const newLines = [...lines];
      const currentLine = newLines[newLines.length - 1];
      const distance = calculateDistance(currentLine.start, currentLine.end);
  
      if (distance < MIN_LINE_LENGTH) {
          newLines.pop();  // Supprime la ligne si elle est trop courte
          setMessage('La ligne est trop courte. Essayez à nouveau.');
      }
  
      setLines(newLines);
  };
  
const THRESHOLD = 0.3; // Correspond à 5% de tolérance

const areParallel = () => {
    if (lines.length !== 2) return false;

    const line1 = lines[0];
    const line2 = lines[1];

    const deltaY1 = line1.end[1] - line1.start[1];
    const deltaX1 = line1.end[0] - line1.start[0];

    const deltaY2 = line2.end[1] - line2.start[1];
    const deltaX2 = line2.end[0] - line2.start[0];

    const MARGIN = 20;  // 5 pixels de tolérance

    // Si les deux lignes sont approximativement verticales
    if (Math.abs(deltaX1) < MARGIN && Math.abs(deltaX2) < MARGIN) {
        return true;
    }

    // Si les deux lignes sont approximativement horizontales
    if (Math.abs(deltaY1) < MARGIN && Math.abs(deltaY2) < MARGIN) {
        return true;
    }

    // Si une ligne est approximativement verticale/horizontale et l'autre non
    if ((Math.abs(deltaX1) < MARGIN || Math.abs(deltaX2) < MARGIN) || (Math.abs(deltaY1) < MARGIN || Math.abs(deltaY2) < MARGIN)) {
        return false;
    }

    // Si aucune des lignes n'est verticale ou horizontale, nous vérifions les pentes
    const m1 = deltaY1 / deltaX1;
    const m2 = deltaY2 / deltaX2;

    // Vérifie si les pentes sont proches l'une de l'autre
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
const MARGIN = 20;  // 5 pixels de tolérance, par exemple

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

      <br />
      <br />
    
      <br/>
      <br></br>
      <Canvas
        onMouseDown={startLine}
        onMouseMove={moveLine}
        onMouseUp={endLine}
        onTouchStart={startLine}
        onTouchMove={moveLine}
        onTouchEnd={endLine}
      >
        <svg style={{ width: '100%', height: '100%' }}>
          <Grid />
          <UserLines lines={lines} currentColor={currentColor} colors={colors} />
        </svg>
        

      </Canvas>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <Controls checkMode={checkMode} lines={lines} handleCheck={handleCheck} handleReset={handleReset} />

    
</div>

    </Container>
  );
}

export default App;
