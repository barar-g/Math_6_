import styled from 'styled-components';
import { useState, React, useEffect } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
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

function Geo1() {
  const [lines, setLines] = useState(null); // Use a single line instead of an array of lines
  const [drawing, setDrawing] = useState(false);
  const [checkMode, setCheckMode] = useState('parallel'); // 'parallel', 'perpendicular'
  const [message, setMessage] = useState('Tracez deux lignes perpandiculaire');
  const [questions, setQuestions] = useState([]);

  const getRelativeCoordinates = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };
  
  const colors = ['#FF1744', '#00E676', '#651FFF', '#FF9100', '#E1F5FE']; // Palette de couleurs



const [currentColor, setCurrentColor] = useState(0);



const startLine = (e) => {
  if (e.target.tagName === "BUTTON") return;

  const coords = getRelativeCoordinates(e);
  setLines({ start: [coords.x, coords.y], end: [coords.x, coords.y] });
  setDrawing(true);
};

const moveLine = (e) => {
  if (!drawing || !lines) return; // No need to update if no line is drawn or drawing is not in progress

  const coords = getRelativeCoordinates(e);

  // Update the end coordinates of the drawn line
  setLines((prevLine) => ({ start: prevLine.start, end: [coords.x, coords.y] }));
};

const endLine = () => {
  if (!drawing || !lines) return; // No need to update if drawing is not in progress or no line is drawn

  // Check if the drawn line is parallel
  if (arePerpendicular()) {
    
    setMessage(<span style={{ color: 'green' }}>Correct!. Repeat.</span>);
    setTimeout(() => {
      setMessage('Tracez deux lignes perpendiculaire');
    }, 2000);

  } else {
    setMessage(<span style={{ color: 'red' }}>Incorrect! The line is not perpendiculaire. Repeat.</span>);
    setTimeout(() => {
      setMessage('Tracez deux lignes perpendiculaire');
    }, 2000);
  }
  

  setTimeout(() => {
    setLines(null);
    newcoordinates();
    
  }, 2000);
  setDrawing(false);
};


  // ... [le reste de votre code]

const THRESHOLD = 0.1; // Correspond à 5% de tolérance

const newcoordinates = () => {
  const newQuestions = [generatenewcoordinates()];
  setQuestions(newQuestions);
};

const generatenewcoordinates = () => {
    const X1 = Math.floor(Math.random() * 100) + 1
    const Y1 = Math.floor(Math.random() * 100) + 1

    const X2 = Math.floor(Math.random() * 1000) + 1
    const Y2 = Math.floor(Math.random() * 1000) + 1

    return {X1, X2, Y1, Y2}
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
    const deltaX2 = referenceLine.end[0] - referenceLine.start[0];

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



const arePerpendicular = () => {
    if (!lines) return false;

  const X1 = questions.reduce((sum, q) => sum + Math.floor(q.X1), 0)
  const Y1 = questions.reduce((sum, q) => sum + Math.floor(q.Y1), 0)
  const X2 = questions.reduce((sum, q) => sum + Math.floor(q.X2), 0) 
  const Y2 = questions.reduce((sum, q) => sum + Math.floor(q.Y2), 0) 

  const referenceLine = { start: [X1, Y1], end: [X2, Y2] };

    

    const deltaY1 = lines.end[1] - lines.start[1];
    const deltaX1 = lines.end[0] - lines.start[0];

    const deltaY2 = referenceLine.end[1] - referenceLine.start[1];
    const deltaX2 = referenceLine.end[0] - referenceLine.start[0];

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

useEffect(() => {
  // This effect will run whenever the 'points' state changes.
  newcoordinates();

}, []);

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
      >
        <svg style={{ width: '100%', height: '100%' }}>
          {/* ... (previous code) */}

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