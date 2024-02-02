import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./TriangleActivity.css"; // You can create a CSS file for styling
import useSound from "use-sound";
import correctSound from "../sounds/correct.mp3";
import incorrectSound from "../sounds/incorrect.mp3";

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
  font-family: "Comic Sans MS", sans-serif;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledText1 = styled.p`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  font-size: 1em;
  font-family: "Comic Sans MS", sans-serif;
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
const ResetButton = styled.button`
  border-radius: 5px;
  background-color: #007bff;
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
  width: 300px;
  height: 300px;
  border: 4px solid #4caf50;
  display: flex;
  overflow: hidden;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: #3bd8ff;
`;

function Droits() {
  const [opverify, setOpverify] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);
  const [showX, setShowX] = useState(false);

  const [showCongratulations, setShowCongratulations] = useState(false);
  const [step, setStep] = useState(0);
  const [points, setPoints] = useState({
    A: null,
    B: null,
    C: null,
    D: null,
    E: null,
  });
  const generateQuestion = () => {
    const newQuestions = [generateneworder()];
    setQuestions(newQuestions);
    setShowCongratulations(false);
  };


  const generateneworder = () => {
    const questions = [
      "Placer le point C sur le mediatrice (ED) de facon que le triangle ABC soit egale a ABD",
      "Placer le point C sur le circle de centre A pour obtenir un triangle rectangle en A",
      "Placer le point C sur le circle de centre B pour obtenir un triangle rectangle en B"
    ];
    const randomIndex = Math.floor(Math.random() * questions.length);
    const Q =questions[randomIndex];
    const Q1 = questions[0];
    const Q2 = questions[1];
    const Q3 = questions[2];
    return {Q,Q1,Q2,Q3}

  }

  const VerifyOrder =() =>{
    const A = questions.reduce((sum, q) => sum + (q.Q),"");
    const A1 =questions.reduce((sum, q) => sum + (q.Q1),"");
    const A2 =questions.reduce((sum, q) => sum + (q.Q2),"");
    const A3 =questions.reduce((sum, q) => sum + (q.Q3),"");
    if(points.A && points.B && points.C && points.D){

    
    if (A === A1 && ((calculateDistance(points.A, points.D) / 37.8).toFixed(1) === (calculateDistance(points.A, points.C) / 37.8).toFixed(1)) || A === A2 && ((calculateDistance(points.A, points.D) / 37.8).toFixed(1) === (calculateDistance(points.D, points.C) / 37.8).toFixed(1)) || A === A3 && ((calculateDistance(points.A, points.D) / 37.8).toFixed(1) === (calculateDistance(points.D, points.C) / 37.8).toFixed(1)) ){
      setShowCongratulations(true);
      play();
      setOpverify(true);
    }else{
      setShowCongratulations(false);
      setOpverify(false);
      setShowX(true);
      play1()
      setTimeout(() => {
        setShowX(false); // Hide the "X" element after 2 seconds
      }, 2000);
      console.log(A1)
      console.log(A2)
      console.log(A3)
    }
    }
  };
  const verify = () => {
    VerifyOrder();
  };
  const MEDIATRICE_X =
    points.A && points.B ? (points.A.x + points.B.x) / 2 : null;
  const calculateDistance = (point1, point2) => {
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
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

      return (
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="red"
          strokeDasharray="5"
        />
      );
    }
    return null;
  };
  // Add a function to calculate intersection points between two circles
  const calculateCircleIntersection = (center1, radius1, center2, radius2) => {
    const d = calculateDistance(center1, center2);

    // Check if the circles intersect
    if (d > radius1 + radius2 || d < Math.abs(radius1 - radius2)) {
      return [];
    }

    const a = (radius1 * radius1 - radius2 * radius2 + d * d) / (2 * d);
    const h = Math.sqrt(radius1 * radius1 - a * a);

    const intersectionX1 = center1.x + (a * (center2.x - center1.x)) / d;
    const intersectionY1 = center1.y + (a * (center2.y - center1.y)) / d;

    const intersectionX2 = intersectionX1 + (h * (center2.y - center1.y)) / d;
    const intersectionY2 = intersectionY1 - (h * (center2.x - center1.x)) / d;

    return [
      { x: intersectionX1, y: intersectionY1 },
      { x: intersectionX2, y: intersectionY2 },
    ];
  };

  const handlePointClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const newPoints = { ...points };
    const pointName = step === 0 ? "A" : step === 1 ? "B" : "C";
    newPoints[pointName] = { x: offsetX, y: offsetY };
    setPoints(newPoints);
    setStep(step + 1);

    if (step === 2) {
      const intersections = calculateCircleIntersection(
        points.A,
        calculateDistance(points.A, points.B) / 1.7,
        points.B,
        calculateDistance(points.A, points.B) / 1.7
      );

      if (intersections.length > 0) {
        const [intersection1, intersection2] = intersections;
        const middlePointX = (points.A.x + points.B.x) / 2;
        const middlePointY = (points.A.y + points.B.y) / 2;

        const distanceToIntersection1 = calculateDistance(
          { x: middlePointX, y: middlePointY },
          intersection1
        );
        const distanceToIntersection2 = calculateDistance(
          { x: middlePointX, y: middlePointY },
          intersection2
        );
        if (distanceToIntersection1 > distanceToIntersection2) {
          setPoints({
            ...points,
            D: intersection1,
            E: intersection2,
          });
        } else {
          setPoints({
            ...points,
            D: intersection2,
            E: intersection1,
          });
        }
        setStep(step + 1);
      }
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
        fill="none"
        stroke="black"
        strokeDasharray="5"
      />
    );
  };
  useEffect(() => {
    // This effect will run whenever the 'points' state changes.
    generateQuestion();
  }, []);
  const reset = () => {
    if (opverify) {
      generateQuestion();
    }
    setShowCongratulations(false);
    setOpverify(false); // Reset the verification status
    setStep(0);
    setPoints({ A: null, B: null, C: null, D:null, E:null });
  };
  const retourner = () => {
    if (step > 0 && step <4) {
      setStep(step - 1);
      switch (step) {
        case 3:
          setPoints({ ...points, C: 0,D:0,E:0 });
          break;
        case 2:
          setPoints({ ...points, B: null });
          break;
        case 1:
          setPoints({ A: null, B: null, C: null });
          break;
        default:
          break;
      }
    } else if(step==0){
      setPoints({ A: null, null: null, C: null });
    }else {
      setPoints({ ...points, C: null });
      setStep(2)
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
                {points.A && step >= 1 && drawCircle(points.A, 2)}
                {points.B &&
                  step >= 2 &&
                  drawCircle(
                    points.B,
                    calculateDistance(points.A, points.B) / 1.7
                  )}
                                  {points.B &&
                  step >= 2 &&
                  drawCircle(points.B, 2)}
                {points.B &&
                  step >= 2 &&
                  drawCircle(
                    points.A,
                    calculateDistance(points.A, points.B) / 1.7
                  )}

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
                {points.D && points.A && points.B && step>=3 &&
                <>
                <line
                      x1={points.A.x}
                      y1={points.A.y}
                      x2={points.D.x}
                      y2={points.D.y}
                      stroke="gray"
                      strokeDasharray="5"
                    />
                <line
                      x1={points.B.x}
                      y1={points.B.y}
                      x2={points.D.x}
                      y2={points.D.y}
                      stroke="gray"
                      strokeDasharray="5"
                    />
                </>

                }
                {calculatePerpendicularLine()}
                {points.A && step >= 1 && (
                  <text x={points.A.x} y={points.A.y - 10} textAnchor="middle">
                    A
                  </text>
                )}

                {points.B && step >= 2 && (
                  <text x={points.B.x} y={points.B.y - 10} textAnchor="middle">
                    B
                  </text>
                )}
                {points.C && step >= 2 && (
                  <text x={points.C.x} y={points.C.y - 10} textAnchor="middle">
                    C
                  </text>
                )}
                {points.D && step >= 3 && (
                  <circle cx={points.D.x} cy={points.D.y} r={2} fill="red" />
                )}
                {points.D && step >= 3 && (
                  <text x={points.D.x} y={points.D.y - 10} textAnchor="middle">
                    D
                  </text>
                )}
                {points.E && step >= 3 && (
                  <circle cx={points.E.x} cy={points.E.y} r={2} fill="red" />
                )}
                {points.E && step >= 3 && (
                  <text x={points.E.x} y={points.E.y - 10} textAnchor="middle">
                    E
                  </text>
                )}
              </svg>
            </div>
          </BandeBox>
        </div>
        <div>
          {" "}
          <ResetButton
            variant="contained"
            type="submit"
            onClick={verify}
            style={{ marginRight: "10px" }}
          >
            Verifier
          </ResetButton>
          <VerifieButton style={{ marginRight: "10px" }} onClick={retourner}>
            Retourner
          </VerifieButton>
          <VerifieButton onClick={reset}>Reset</VerifieButton>
        </div>
        <div>{showX && <span>✖️</span>}
          {showCongratulations && <span>✅</span>}</div>
          {points.A && points.B &&
          <div>
          <div>
            
            <StyledText1>
            <span style={{ marginRight: "10px" }}>
              AB = {!points.A && 0}
              {points.A && points.B &&
              (calculateDistance(points.A, points.B) / 37.8).toFixed(1)}cm
            </span>
            <span style={{ marginRight: "10px" }}>
            AC = {!points.C && 0}
              {points.A && points.C &&
              (calculateDistance(points.A, points.C) / 37.8).toFixed(1)}cm
            </span>
            <span>
            BC = {!points.C && 0}
              {points.B && points.C &&
              (calculateDistance(points.B, points.C) / 37.8).toFixed(1)}cm
            </span>
            </StyledText1>
          </div>
          <div>
          <StyledText1>
          <span style={{ marginRight: "10px" }}>
            BD = {!points.D && 0}
              {points.B && points.D&&
              (calculateDistance(points.B, points.D) / 37.8).toFixed(1)}cm
            </span>
            <span style={{ marginRight: "10px" }}>
            AE = {!points.E && 0}
              {points.A && points.E &&
              (calculateDistance(points.A, points.E) / 37.8).toFixed(1)}cm
            </span>
            <span style={{ marginRight: "10px" }}>
            AD = {!points.D && 0}
              {points.A && points.D &&
              (calculateDistance(points.A, points.D) / 37.8).toFixed(1)}cm
            </span>
          </StyledText1>
        
          </div>
          </div>
              }
        
        <div>


      
      {!showCongratulations && !points.A &&  (
            <div>
              <StyledText>
                Cliquer pour construire le sommet A.
              </StyledText>
            </div>
          )}
      {!showCongratulations && points.A && !points.D && (
            <div>
              <StyledText>
                Cliquer pour construire votre segment AB
              </StyledText>
            </div>
          )}

      {!showCongratulations && points.A && points.B && !points.D && (
            <div>
              <StyledText>
                cliquer pour visualiser les points D et E
              </StyledText>
            </div>
          )}
      {questions.map((q) => (  
            <StyledText>
              {!showCongratulations && points.A && points.B && points.D && <span>{q.Q}</span>}
            </StyledText>
            
          ))}
                {!showCongratulations && points.A && points.B && points.D && (
            <div>
              <StyledText>
                Utiliser les distances pour vous aider. 
              </StyledText>
            </div>
          )}

{showCongratulations &&  (
            <div>
              <StyledText>
                Parfait !. 
              </StyledText>
            </div>
          )}
          
          
        </div>
      </div>
    </TriangleContainer>
  );
}

export default Droits;
