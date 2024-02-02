import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./TriangleActivity.css"; // You can create a CSS file for styling

const TriangleContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  margin-left: 0px;
`;
const StyledText = styled.p`
    padding: 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;
    &:hover {
        transform: scale(1.05);
    }
`;

const StyledText1 = styled.p`
    padding: 0px 20px;
    display: flex;
    justify-content: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;
    &:hover {
        transform: scale(1.05);
    }
`;
const VerifieButton = styled.button`
  border-radius: 5px;
  background-color: #45a05c;
  margin: 15px 0;
  color: white;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const BandeBox = styled.div`
  width: 200px;
  height: 200px;
  border: 4px solid #4caf50;
  display: flex;
  overflow: hidden;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: #ffeb3b;
`;

function TriangleActivity() {
  const [step, setStep] = useState(0);
  const [points, setPoints] = useState({ A: null, B: null, C: null });
  const [triangleType, setTriangleType] = useState(null);
  const MEDIATRICE_X =
    points.A && points.B ? (points.A.x + points.B.x) / 2 : null;

  const calculateDistance = (point1, point2) => {
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
  };

  const calculateMediatriceX = () => {
    if (points.A && points.B && points.C) {
      return (points.A.x + points.B.x) / 2;
    }
    return null;
  };
  const MEDIATRICEX = calculateMediatriceX();

  const calculateTriangleType = () => {
    if (points.A && points.B && points.C) {
      const AB = (calculateDistance(points.A, points.B) / 37.8).toFixed(1);
      const BC = (calculateDistance(points.B, points.C) / 37.8).toFixed(1);
      const AC = (calculateDistance(points.A, points.C) / 37.8).toFixed(1);
      console.log("AB", (calculateDistance(points.A, points.B) / 37.8).toFixed(1));
      console.log("AC", AC);
      console.log("BC", BC);
      
      // Vérifier si c'est un triangle équilatéral
      if (AB === BC && BC === AC) {
        setTriangleType("equilateral");
      }
      // Vérifier si c'est un triangle isocèle
      else if (
        AB === BC ||
        BC === AC ||
        AC === AB
      ) {
        setTriangleType("C'est un Triangle isocele");
      }
      // Vérifier si c'est un triangle rectangle
      else if (
        Math.pow(AB, 2) + Math.pow(BC, 2) === Math.pow(AC, 2) ||
        Math.pow(BC, 2) + Math.pow(AC, 2) === Math.pow(AB, 2) ||
        Math.pow(AC, 2) + Math.pow(AB, 2) === Math.pow(BC, 2)
      ) {
        setTriangleType("C'est un triangle rectangle");
      } 
      // Si aucune des conditions ci-dessus n'est satisfaite, c'est un triangle quelconque
      else {
        setTriangleType("C'est un triangle quelconque");
      }
    }
  };
  const calculatePerpendicularLine = () => {
    if (points.A && points.B) {
      const middlePointX = (points.A.x + points.B.x) / 2;
      const middlePointY = (points.A.y + points.B.y) / 2;

      const slopeAB = (points.B.y - points.A.y) / (points.B.x - points.A.x);
      const perpendicularSlope = -1 / slopeAB;

      // Calculate two points on the perpendicular line
      const x1 = middlePointX + 50; // Adjust the length of the line as needed
      const y1 = middlePointY + 50 * perpendicularSlope;
      const x2 = middlePointX - 50; // Adjust the length of the line as needed
      const y2 = middlePointY - 50 * perpendicularSlope;

      return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="red" strokeDasharray="5"/>;
    }
    return null;
  };

  const calculateParallelLines = () => {
    if (points.A && points.B) {
      const slopeAB = (points.B.y - points.A.y) / (points.B.x - points.A.x);
    
      // Calculate the length of AB
      const lengthAB = Math.sqrt((points.B.x - points.A.x) ** 2 + (points.B.y - points.A.y) ** 2);
  
      // Calculate the slope for the parallel lines
      const parallelSlope1 = -1 / slopeAB; // Perpendicular slope
      const parallelSlope2 = -1 / slopeAB; // Perpendicular slope
    
      // Calculate two points on the first parallel line
      const x1_1 = points.A.x - lengthAB / 2;
      const y1_1 = points.A.y - (lengthAB / 2) * parallelSlope1;
      const x2_1 = points.A.x + lengthAB / 2;
      const y2_1 = points.A.y + (lengthAB / 2) * parallelSlope1;
    
      // Calculate two points on the second parallel line
      const x1_2 = points.B.x - lengthAB / 2;
      const y1_2 = points.B.y - (lengthAB / 2) * parallelSlope2;
      const x2_2 = points.B.x + lengthAB / 2;
      const y2_2 = points.B.y + (lengthAB / 2) * parallelSlope2;
    
      return (
        <>
          <line x1={x1_1} y1={y1_1} x2={x2_1} y2={y2_1} stroke="blue" strokeDasharray="5" />
          <line x1={x1_2} y1={y1_2} x2={x2_2} y2={y2_2} stroke="green" strokeDasharray="5" />
        </>
      );
    }
    return null;
  };
  
  
  const handlePointClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const newPoints = { ...points };
    const pointName = step === 0 ? "A" : step === 1 ? "B" : "C";
    newPoints[pointName] = { x: offsetX, y: offsetY };
    setPoints(newPoints);
    setStep(step + 1);
    if (step === 2) {
      calculateTriangleType();
    }
  };

  const drawLine = (start, end) => {
    return (
      <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="black" />
    );
  };

  const drawCircle = (center, radius) => {
    return (
      <circle
        cx={center.x}
        cy={center.y}
        r={radius}
        fill="transparent"
        stroke="black"
      />
    );
  };
  useEffect(() => {
    // This effect will run whenever the 'points' state changes.
    if (points.A && points.B && points.C) {
      calculateTriangleType();
    }
  }, [points]);
  const reset = () => {
    if (step > 0 & step<4) {
      setStep(step - 1);
      switch (step) {
        case 3:
          setTriangleType(null);
          break;
        case 2:
          setPoints({ ...points, C: null });
          break;
        case 1:
          setPoints({ ...points, B: null });
          break;
        case 0:
          setPoints({ A: null, B: null, C: null });
          break;
        default:
          break;
      }
    }else {
      setTriangleType(null);
      setStep(2);
    }
  };
  
  return (
    <TriangleContainer style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <BandeBox>
            <div className="triangle-activity">
              <svg
                width="500"
                height="500"
                onClick={handlePointClick}
                className={`step-${step}`}
              >
                {points.A && points.B && drawLine(points.A, points.B)}
                {points.A && step >= 1 && drawCircle(points.A, 3)}
                {points.B && step >= 2 && drawCircle(points.B, 3)}
                {points.C && step >= 2 && drawCircle(points.C, 3)}
                {points.C && drawLine(points.A, points.C)}
                {points.C && drawLine(points.B, points.C)}

                {points.A && points.B && step >= 2 && (
                  <>
                    <line
                      x1={points.A.x}
                      y1={points.A.y}
                      x2={points.B.x}
                      y2={points.B.y}
                      stroke="gray"
                      strokeDasharray="5"
                    />
                    <line
                      x1={points.A.x}
                      y1={points.A.y}
                      x2={points.B.x}
                      y2={points.B.y}
                      stroke="gray"
                      strokeDasharray="5"
                    />
                    {MEDIATRICE_X && (
                      <>
                        <circle
                          cx={MEDIATRICE_X}
                          cy={(points.A.y + points.B.y) / 2}
                          r="5"
                          fill="gray"
                        />
                      </>
                    )}
                  </>
                )}
                {calculatePerpendicularLine()}
                {calculateParallelLines()}

                {points.A && step >= 1 && (
                  <text x={points.A.x} y={points.A.y - 10} textAnchor="middle">
                    A
                  </text>
                )}
                {points.B && step >= 2 &&(
                  <text x={points.B.x} y={points.B.y - 10} textAnchor="middle">
                    B
                  </text>
                )}
                {points.C && step >= 2 &&(
                  <text x={points.C.x} y={points.C.y - 10} textAnchor="middle">
                    C
                  </text>
                )}
              </svg>
            </div>
          </BandeBox>
        </div>
        <div>
          {" "}
          <VerifieButton  onClick={reset}>
            Reset
          </VerifieButton>
        </div>
        {points.A && points.B && points.C && (
          <div>
            <StyledText1>
              <span style={{marginRight:"10px"}}>AB = {(calculateDistance(points.A, points.B)/37.8).toFixed(1)}cm</span>
              <span style={{marginRight:"10px"}}>AC = {(calculateDistance(points.A, points.C)/37.8).toFixed(1)}cm</span>
              <span>BC = {(calculateDistance(points.B, points.C)/37.8).toFixed(1)}cm</span>
              </StyledText1>
            
            
          </div>
        )}
        <div>
          {triangleType && <StyledText> {triangleType}</StyledText>}
          {!triangleType && !points.A && !points.B && !points.C &&
          <div>
          <StyledText>
            Cliquer pour construire le sommet A de votre triangle ABC.
          </StyledText>
          </div>
          }
          {points.A && !points.B && step >= 1 && !points.C &&
          <StyledText>Choisir maintenant le point B pour construir le coté AB</StyledText>
          }
          {points.A && points.B && !points.C && step >= 2 &&
          <StyledText>Suivre le mediatrice pour construir des triangles particuliers </StyledText>
          }

        </div>
      </div>
    </TriangleContainer>
  );
}

export default TriangleActivity;
