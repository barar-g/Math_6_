import { useState, React, useEffect } from 'react';
import { Container, Card, StyledText, Canvas } from '../Styles/MajorStyles';
import Grid from './Gride';
import { Button } from '@mui/material';

function Geo1() {
  const [lines, setLines] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [message, setMessage] = useState('Tracez deux lignes parallel');
  const [questions, setQuestions] = useState([]);
  const colors = ['#FF1744', '#00E676', '#651FFF', '#FF9100', '#E1F5FE'];
  const [currentColor, setCurrentColor] = useState(0);
  
  
 

  function disableScrolling() {
    document.body.style.overflow = 'hidden';
}

function enableScrolling() {
  document.body.style.overflow = '';
}

  const getRelativeCoordinates = (e) => {
    let clientX, clientY;
    
    if (e.touches) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const calculateDistance = (start, end) => {
    return Math.sqrt(
      (end[0] - start[0]) ** 2 + (end[1] - start[1]) ** 2
    );
  };
  
  const startLine = (e) => {
    e.preventDefault();
    e.stopPropagation();
    disableScrolling();

    if (e.target.tagName === "BUTTON") return;

    const coords = getRelativeCoordinates(e);
    setLines({ start: [coords.x, coords.y], end: [coords.x, coords.y] });
    setDrawing(true);
  };

  const moveLine = (e) => {
    disableScrolling();
    e.preventDefault();
    e.stopPropagation();

    if (!drawing || !lines) return;

    const coords = getRelativeCoordinates(e);
    setLines((prevLine) => ({ start: prevLine.start, end: [coords.x, coords.y] }));
  };

  const endLine = (e) => {
    e.preventDefault();
    e.stopPropagation();
    enableScrolling();
  
    if (!drawing || !lines) return;
  
    const distance = calculateDistance(lines.start, lines.end);
    if (distance < 30) {
      setMessage('La ligne est trop courte. Essayez à nouveau.');
      // If the line is shorter than 30 pixels, ignore it
      setLines(null);
    } else {
      // If the line is 30 pixels or longer, check if it's parallel
      if (areParallel()) {
        setMessage(<span style={{ color: 'green' }}>Correct! Repeat.</span>);
        setTimeout(() => {
          setMessage('Tracez deux lignes parallel');
        }, 2000);
      } else {
        setMessage(<span style={{ color: 'red' }}>Incorrect! The line is not parallel. Repeat.</span>);
        setTimeout(() => {
          setMessage('Tracez deux lignes parallel');
        }, 2000);
      }
  
      // Prepare for the next line
      setTimeout(() => {
        setLines(null);
        newcoordinates();
      }, 2000);
    }
    setDrawing(false);
  };
  

  const THRESHOLD = 0.3;

  const newcoordinates = () => {
    const newQuestions = [generatenewcoordinates()];
    setQuestions(newQuestions);
  };

  const generatenewcoordinates = () => {
    const X1 = Math.floor(Math.random() * 100) + 1;
    const Y1 = Math.floor(Math.random() * 100) + 1;
    const X2 = Math.floor(Math.random() * 1000) + 1;
    const Y2 = Math.floor(Math.random() * 1000) + 1;
    return {X1, X2, Y1, Y2};
  };

const areParallel = () => {

  const X1 = questions.reduce((sum, q) => sum + Math.floor(q.X1), 0)
  const Y1 = questions.reduce((sum, q) => sum + Math.floor(q.Y1), 0)
  const X2 = questions.reduce((sum, q) => sum + Math.floor(q.X2), 0) 
  const Y2 = questions.reduce((sum, q) => sum + Math.floor(q.Y2), 0) 
    if (!lines) return false;

    

    const referenceLine = { start: [X1, Y1], end: [X2, Y2] }; // Define a reference line (you can adjust as needed)

    const deltaY1 = lines.end[1] - lines.start[1];
    const deltaX1 = lines.end[0] - lines.start[0];

    const deltaY2 = referenceLine.end[1] - referenceLine.start[1];
    const deltaX2 = referenceLine.end[0] - referenceLine.start[0]

    const MARGIN = 5;  // 5 pixels de tolérance

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



useEffect(() => {
  newcoordinates();
}, []);

return (
  <Container>
    <div className="messageContainer" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Card>
        <StyledText>{message}</StyledText>
      </Card>
    </div>

    <br />
    <br />
    <Canvas
      onMouseDown={startLine}
      onMouseMove={moveLine}
      onMouseUp={endLine}
      onTouchStart={startLine}
      onTouchMove={moveLine}
      onTouchEnd={endLine}
    >
      <svg style={{ width: '100%', height: '100%' }}>
        <Grid/>
        {questions.map((q) => (
          <line
            x1={q.X1}
            y1={q.Y1}
            x2={q.X2}
            y2={q.Y2}
            stroke={colors[currentColor]}
            strokeWidth="3"
          />
        ))}
        {lines && (
          <line
            x1={lines.start[0]}
            y1={lines.start[1]}
            x2={lines.end[0]}
            y2={lines.end[1]}
            stroke={colors[currentColor]}
            strokeWidth="3"
          />
        )}
      </svg>
    </Canvas>
  </Container>
);
}

export default Geo1;