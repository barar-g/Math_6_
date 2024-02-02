import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { Container, Card, StyledText } from '../Styles/MajorStyles';
import Grid from './Gride';
import { Button } from '@mui/material';

const Canvas = styled.div`
height: 50vh;
width: 40vh;
background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};
border: 1px solid #B0BEC5;
position: relative;
cursor: pointer;

svg {
    pointer-events: none;
}

&:hover {
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
    height: 60vh;
}
`;

function Geo1() {
    const [lines, setLines] = useState(null);
    const [drawing, setDrawing] = useState(false);
    const [message, setMessage] = useState('Tracez deux lignes perpendiculaires');
    const [questions, setQuestions] = useState([]);
    const colors = ['#FF1744', '#00E676', '#651FFF', '#FF9100', '#E1F5FE'];
    const [currentColor, setCurrentColor] = useState(0);
    const canvasRef = useRef(null); // Nouvelle référence pour le Canvas

    // Fonction pour calculer la distance entre deux points
const calculateDistance = (x1, y1, x2, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};


    function disableScrolling() {
      document.body.style.overflow = 'hidden';
  }
  
  function enableScrolling() {
    document.body.style.overflow = '';
  }


    const getRelativeCoordinates = (canvas, e) => {
      let clientX, clientY;

      if (e.touches) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
      } else {
          clientX = e.clientX;
          clientY = e.clientY;
      }

      const rect = canvas.getBoundingClientRect();
      return {
          x: clientX - rect.left,
          y: clientY - rect.top,
      };
  };

  const startLine = (e) => {
    disableScrolling();
      if (e.type === "touchstart") {
          e = e.touches[0];
      }
      if (e.target.tagName === "BUTTON") return;

      const coords = getRelativeCoordinates(canvasRef.current, e);
      setLines({ start: [coords.x, coords.y], end: [coords.x, coords.y] });
      setDrawing(true);
  };

  const moveLine = (e) => {
    disableScrolling();
      if (e.type === "touchmove") {
          e = e.touches[0];
      }
      if (!drawing || !lines) return;

      const coords = getRelativeCoordinates(canvasRef.current, e);
      setLines((prevLine) => ({ start: prevLine.start, end: [coords.x, coords.y] }));
  };

  const endLine = (e) => {
    enableScrolling();
    e.preventDefault();
    if (!drawing || !lines) return;

    const lineLength = calculateDistance(
        lines.start[0], lines.start[1], 
        lines.end[0], lines.end[1]
    );

    // Si la ligne est trop courte, réinitialisez les lignes comme si rien n'était tracé
    if (lineLength < 30) {
        setLines(null);
        setMessage('La ligne est trop courte. Essayez à nouveau.');
        setDrawing(false);
        return; // Ajoutez return pour sortir de la fonction si la ligne est trop courte
    }

    // Continuer avec la logique existante si la ligne est suffisamment longue
    if (arePerpendicular()) {
        setMessage(<span style={{ color: 'green' }}>Correct!. Répétez.</span>);
    } else {
        setMessage(<span style={{ color: 'red' }}>Incorrect! La ligne n'est pas perpendiculaire. Répétez.</span>);
    }

    setTimeout(() => {
        setMessage('Tracez deux lignes perpendiculaires');
        setLines(null);
        newCoordinates();
    }, 2000);

    setDrawing(false);
};


    const THRESHOLD = 0.3;
    const MARGIN = 20;

    const newCoordinates = () => {
        setQuestions([generateNewCoordinates()]);
    };

    const generateNewCoordinates = () => {
        return {
            X1: Math.floor(Math.random() * 100) + 1,
            Y1: Math.floor(Math.random() * 100) + 1,
            X2: Math.floor(Math.random() * 1000) + 1,
            Y2: Math.floor(Math.random() * 1000) + 1
        };
    };

    const arePerpendicular = () => {
        if (!lines || questions.length === 0) return false;

        const { X1, Y1, X2, Y2 } = questions[0]; // Utiliser directement le premier élément puisque vous avez toujours un seul élément dans le tableau

        const referenceLine = { start: [X1, Y1], end: [X2, Y2] };

        const deltaY1 = lines.end[1] - lines.start[1];
        const deltaX1 = lines.end[0] - lines.start[0];

        const deltaY2 = referenceLine.end[1] - referenceLine.start[1];
        const deltaX2 = referenceLine.end[0] - referenceLine.start[0];

        if ((Math.abs(deltaX1) < MARGIN && Math.abs(deltaY2) < MARGIN) || 
            (Math.abs(deltaY1) < MARGIN && Math.abs(deltaX2) < MARGIN)) {
            return true;
        }

        const m1 = deltaY1 / deltaX1;
        const m2 = deltaY2 / deltaX2;

        return Math.abs(m1 * m2 + 1) < THRESHOLD;
    };

    useEffect(() => {
        newCoordinates();
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
            ref={canvasRef} // Ajoutez la référence ici
            onMouseDown={startLine}
            onMouseMove={moveLine}
            onMouseUp={endLine}
            onTouchStart={startLine}
            onTouchMove={moveLine}
            onTouchEnd={endLine}
        >
        <svg style={{ width: '100%', height: '100%' }}>
          {/* ... (previous code) */}
<Grid/>
          {/* Draw the reference line */}
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

          {/* Draw the user-drawn line */}
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