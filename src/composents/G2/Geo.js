import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../Styles/TriangleActivity.css"; // You can create a CSS file for styling
import ReplyIcon from '@mui/icons-material/Reply';
import CheckIcon from '@mui/icons-material/Check';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const ButtonContainer = styled.div`
  margin: 20px;
`;

const TriangleContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  margin-left: 0px;
`;
const StyledText = styled.p`
  padding: 0px !20px;
  display: flex!;
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


const BandeBox = styled.div`
  width: 300px;
  height: 300px;
  border: 4px solid #4caf50;
  display: flex;
  overflow: hidden;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-image: linear-gradient(0deg, transparent 1px, #000 1px, #000 2px, transparent 2px),
                    linear-gradient(90deg, transparent 1px, #000 1px, #000 2px, transparent 1px);
  background-size: 37.8px 37.8px;
  background-color: #cfe1e;
`;


function TriangleActivity1() {
  const [opverify, setOpverify] = useState(false);
  const [questions, setQuestions] = useState([]);

  const [step, setStep] = useState(0);
  const [points, setPoints] = useState({ A: 0, B: 0, C: 0, D: 0 });
  const [showX, setShowX] = useState(false);


  const [showCongratulations, setShowCongratulations] = useState(false);
  

  const calculateDistance = (point1, point2) => {
    return Math.sqrt(
      Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
  };
  const generateQuestion = () => {
    const newQuestions = [generateneworder()];
    setQuestions(newQuestions);
    setShowCongratulations(false);
  };
  const generateneworder = () => {
    const Number =Math.floor(Math.random() * 5) + 2;
    const questions = [
      "tracer un carre de cote "+Number+"cm",
      "Tracer un rectangle de facon longuer eguale largeur multiplie par "+Number
      
    ];
    const randomIndex = Math.floor(Math.random() * questions.length);
    const Q =questions[randomIndex];
    const Q1 = questions[0];
    const Q2 = questions[1];
    const Q3 = questions[2];
    return {Q,Q1,Q2,Q3,Number}

  }
  const roundDecimal = (number) => {
    const integerPart = Math.floor(number);
    const decimalPart = number - integerPart;
  
    if (decimalPart >= 0.85) {
      return Math.ceil(number); // Round up to the nearest integer
    } else if (decimalPart <= 0.15) {
      return Math.floor(number); // Round down to the nearest integer
    } else {
      return number; // Do not change for numbers between 1.1 and 1.9
    }
    
  };
  
  


  const VerifyOrder =() =>{
    const A = questions.reduce((sum, q) => sum + (q.Q),"");
    const A1 =questions.reduce((sum, q) => sum + (q.Q1),"");
    const A2 =questions.reduce((sum, q) => sum + (q.Q2),"");
    const Number = questions.reduce((sum, q) => sum + Math.floor(q.Number), 0)
    if(points.A && points.B && points.C && points.D){

    
    if (A === A1 &&
      parseInt(roundDecimal((calculateDistance(points.A, points.B) / 37.8).toFixed(1)))== Number &&
      parseInt(roundDecimal((calculateDistance(points.C, points.B) / 37.8).toFixed(1)))== Number &&
      parseInt(roundDecimal((calculateDistance(points.C, points.D) / 37.8).toFixed(1)))== Number 
      ||
      A === A2 &&
      parseInt(roundDecimal((calculateDistance(points.A, points.B) / 37.8).toFixed(1)))== parseInt(roundDecimal((calculateDistance(points.C, points.B)  / 37.8).toFixed(1)))*Number ||
      parseInt(roundDecimal((calculateDistance(points.C, points.B) / 37.8).toFixed(1)))== parseInt(roundDecimal((calculateDistance(points.A, points.B)  / 37.8).toFixed(1)))*Number

      ){
      setShowCongratulations(true);
     
      setOpverify(true);
    }else{
      setShowCongratulations(false);
      setOpverify(false);
      setShowX(true);
     
      setTimeout(() => {
        setShowX(false); // Hide the "X" element after 2 seconds
      }, 2000);
      console.log(A1)
      console.log(A2)
      console.log(Number)
      console.log(parseInt((calculateDistance(points.A, points.B) / 37.8)))
      console.log(Math.floor(parseInt((calculateDistance(points.A, points.B) / 37.8))))
      console.log(parseInt((calculateDistance(points.A, points.B) / 37.8).toFixed(1)))
    }
    }
  };
  const verify = () => {
    VerifyOrder();
  };


  const handlePointClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const newPoints = { ...points };
    const pointName = step === 0 ? "A" : step === 1 ? "B" : step === 2 ? "C" : "D"; // Point D
    newPoints[pointName] = { x: offsetX, y: offsetY };
    setPoints(newPoints);
    setStep(step + 1);
  };
  

  const drawLine = (start, end, strokeWidth) => {
    return (
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        stroke="black"
        strokeWidth={strokeWidth}
      />
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
    generateQuestion();

  }, []);

  const reset = () => {
    if (opverify) {
      generateQuestion();
    }
    setShowCongratulations(false);
    setOpverify(false); // Reset the verification status
    setStep(0);
    setPoints({ A: 0, B: 0, C: 0, D:0 });
  };
  const retourner = () => {
    if (step > 0 && step <4) {
      setStep(step - 1);
      switch (step) {
        case 3:
          setPoints({ ...points, C: 0 });
          break;
        case 2:
          setPoints({ ...points, B: 0 });
          break;
        case 1:
          setPoints({ A: 0, B: 0, C: 0 });
          break;
        default:
          break;
      }
    } else if(step==0){
      setPoints({ A: 0, B: 0, C: 0, D:0 });
    }else {
      setPoints({ ...points, C: 0, D:0 });
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
                {points.A && step >= 1 && drawCircle(points.A, 2.5)}
                {points.B && step >= 2 && drawCircle(points.B, 2.5)}
                {points.C && step >= 2 && drawCircle(points.C, 2.5)}
                {points.D && step >= 2 && drawCircle(points.D, 2.5)}

                {points.A && points.B && drawLine(points.A, points.B,3.2)}
                {points.C && drawLine(points.B, points.C,3.2)}
                {points.C && drawLine(points.B, points.C,3.2)}
                {points.D && drawLine(points.D, points.C,3.2)}
                {points.D && drawLine(points.D, points.A,3.2)}



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
                    
                    
                  </>
                )}
                

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
                 {points.D && step >= 2 && (
                  <text x={points.D.x} y={points.D.y - 10} textAnchor="middle">
                    D
                  </text>
                )}


              </svg>
       
            </div>
          </BandeBox>
        </div>
        <ButtonContainer>
          {" "}
          <CheckIcon
            variant="contained"
            type="submit"
            color="blue"
            onClick={verify}
            style={{ marginRight: "10px" }}
          >
            Verifier
          </CheckIcon>
          <NavigateBeforeIcon  
 style={{ marginRight: "10px" }}  variant="contained" onClick={retourner}>
            Retourner
          </NavigateBeforeIcon>
          <ReplyIcon  variant="contained" onClick={reset}>Reset</ReplyIcon>
          </ButtonContainer>
        <div>{showX && <span>✖️</span>}
          {showCongratulations && <span>✅</span>}</div>

        <div>
          <StyledText1>
            <span style={{ marginRight: "10px" }}>
              AB = {!points.A && 0}
              {points.A && points.B &&
              roundDecimal((calculateDistance(points.A, points.B) / 37.8).toFixed(1))}cm
            </span>
            <span style={{ marginRight: "10px" }}>
            AD = {!points.D && 0}
              {points.A && points.D &&
              roundDecimal((calculateDistance(points.A, points.D) / 37.8).toFixed(1))}cm
            </span>
            <span style={{ marginRight: "10px" }}>
            BC = {!points.C && 0}
              {points.B && points.C &&
              roundDecimal((calculateDistance(points.B, points.C) / 37.8).toFixed(1))}cm
            </span>
            <span>
            CD = {!points.D && 0}
              {points.D && points.C &&
            roundDecimal(  (calculateDistance(points.D, points.C) / 37.8).toFixed(1))}cm
            </span>
          </StyledText1>
        </div>

        <div>
         
      
      {questions.map((q) => (  
            <StyledText>
              <span>{q.Q}</span>
            </StyledText>
            
          ))}
                
            <div>
              <StyledText>
                Utiliser les lignes de pages pour vous aider. 
              </StyledText>
            </div>
          

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

export default TriangleActivity1;