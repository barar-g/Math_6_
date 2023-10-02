import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  CardContent,
  Box,
  TextField,
  Typography,
} from "@mui/material";

const TriangleContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  margin-left: 0px;
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
  width: 210px;
  height: 300px;
  border: 2px solid #4caf50;
  display: flex;
  overflow: hidden;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: white;
`;

function P3A3() {
  const [questions, setQuestions] = useState([]);
  const [dividend, setDividend] = useState('');
  const [divisor, setDivisor] = useState('');
  const [quotient, setQuotient] = useState(0);
  const [remainder, setRemainder] = useState(0);
  const [calculated, setCalculated] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [devide, setdevide] = useState(false);
  const [step, setStep] = useState(0);

  const calculateDivision = () => {
    const newQuestions = [
      generateSingleQuestion(),
      

    ];
    setQuestions(newQuestions);
  };    
    const generateSingleQuestion = () => {
    if (divisor === 0) {
      alert("Divisor cannot be zero.");
      return;
    } else if (dividend.toString().length != 3 ||divisor.toString().length != 1 ){
      setShowCongratulations(true);
        
    }
  
  

    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;

    setQuotient(quotient);
    setRemainder(remainder);
    setCalculated(true);
    setdevide(true);

  };
  useEffect(() => {
    reset();
  }, []);




  const handleSubmit = (event) => {
    event.preventDefault();
    generateSingleQuestion();
    
   
  };

  const reset = () => {
    setDividend('');
    setDivisor('');
    setQuotient('');
    setShowCongratulations(false);
    setdevide(false);
    setStep(0);
    setCalculated(false);
  } 

  const forward = () => {
    if (calculated && step<5){ 
    setStep(step+1);
    }
  }
  const Backward = () => {
    if (calculated){
    if (step>0){
    setStep(step-1);
    }else {
     reset()
    }
  }

  }
console.log(step)
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
      <div  onSubmit={handleSubmit}>

        

      </div>
   

      



    </div>
          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
            <div>
              {" "}
              <ResetButton
                variant="contained"
                type="submit"
                style={{ marginRight: "15px" }}
                onClick={() => calculateDivision()}
              >
                Calculer
              </ResetButton>
              <VerifieButton
              style={{ marginRight: "1px" }}
              onClick={Backward}
              
              >&#60;
              </VerifieButton>
              <VerifieButton
              style={{ marginRight: "15px" }}
              onClick={forward}
              
              >&#62;
              </VerifieButton>
              <VerifieButton
              onClick={reset}
              >Reset
              </VerifieButton>
            </div>
              <BandeBox>
                <div className="triangle-activity">
                <TextField
          type="text"
          placeholder="Dividend"
          value={dividend}
          maxLength="3"
          onChange={(e) => setDividend(e.target.value)}
          style={{ width: "100px", marginBottom:"5px"}}
          fullWidth
        />
        {step >= 1 &&(
        <div>
        
                <TextField
          type="text"
          placeholder="123"
          value={(dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)%divisor))+' '+'*'}
          onChange={(e) => setDividend(parseInt(e.target.value))}
          style={{ width: "100px", marginBottom:"5px" }}
        />

{step >= 2 &&
               <TextField
          type="text"
          placeholder="Dividend"
          value={dividend-(((dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)%divisor)))+'0')}
          onChange={(e) => setDividend(parseInt(e.target.value))}
          style={{ width: "100px" , marginBottom:"5px"}}
        />
}
{step >= 4 &&
                <TextField
          type="text"
          placeholder="Dividend"
          value={((dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)%divisor)))*10+dividend%10)-((dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)%divisor)))*10+dividend%10)%divisor}
          onChange={(e) => setDividend(parseInt(e.target.value))}
          style={{ width: "100px" , marginBottom:"5px"}}
        />
}
{step >= 5 &&
              <span style = {{width: "50px" }}>
            {remainder !== 0 && `Rest=${remainder}`}
          </span>
}
          </div>
          )}
          
        
                </div>
                <div>
                <TextField
          type="number"
          placeholder="Divisr"
          value={divisor}
          onChange={(e) => setDivisor(parseInt(e.target.value))}
          style={{ width: "100px", marginLeft: "10px", marginRight: "10px", marginBottom:"5px"}}
          fullWidth
        />{calculated && devide &&!showCongratulations  && step<3 &&
                        <TextField
          type="text"
          placeholder="123"
          value={quotient.toString().length > 2 ? quotient.toString().slice(0, 2) : quotient.toString().slice(0, 1) }
          onChange={(e) => setDividend(parseInt(e.target.value))}
          style={{ width: "100px", marginLeft: "10px", marginRight: "10px", marginBottom:"5px"}}
        />
}
        {step >= 3 &&
                                <TextField
          type="text"
          placeholder="123"
          value={quotient}
          onChange={(e) => setDividend(parseInt(e.target.value))}
          style={{ width: "100px", marginLeft: "10px", marginRight: "10px", marginBottom:"5px"}}
        />
}
        {step >= 5 && !showCongratulations &&(
          <span style={{ width: "100px",marginLeft: "10px"}}>
      Quotient={quotient}
      </span>
      )}

                </div>
              </BandeBox>
            </div>
            <div>
            {!showCongratulations && !devide && (
            <StyledText1>
                
                <span>Bienvenue dans le programme de division </span>
                </StyledText1>
                )}
                            {calculated && devide &&!showCongratulations && (
            <StyledText1>
                
                <span>Parfait !!! </span>
                </StyledText1>
                )}
            {showCongratulations && (
              <StyledText1>
                
              <span>Choisir un divident de 3 unités et un diviseur de 1 unité </span>
              </StyledText1>
            )}
            </div>
            </div>
            </div>
          </TriangleContainer>
        
  );
}

export default P3A3;