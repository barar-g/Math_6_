// Activite de division , remplacement divs.jss

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  TextField,
} from "@mui/material";
import vertical from "../Images/vertical.png";
import horizontal from "../Images/horizontal.png";
import { color } from "d3";


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
  const [zero, setZero] = useState(false);

  const calculateDivision = () => {
    const newQuestions = [
      generateSingleQuestion(),
      

    ];
    setQuestions(newQuestions);
  };    
    const generateSingleQuestion = () => {
    if (divisor === 0) {
      setZero(true);
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
    setZero(false);
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


              
{!showCongratulations && !devide && (
<StyledText1>
    
    <span>Bienvenue dans le programme de division </span>
    </StyledText1 >
    )}
                {calculated && devide &&!showCongratulations  && step ===0 && (
                 <StyledText1 style={{color:"red"}}>
                 Prenez les deux chiffres ({dividend.toString().slice(0,2)}), combien de {divisor} dans {dividend.toString().slice(0,2)}. obtenez {quotient.toString().length > 2 ? quotient.toString().slice(0, 2) : quotient.toString().slice(0, 1)}.</StyledText1>
    )}

{step === 1  && (
<StyledText1 style={{color:"blue"}}>
Multipliez les deux chiffres,  {quotient.toString().length > 2 ? quotient.toString().slice(0, 2) : quotient.toString().slice(0, 1) }  par {divisor}, obtenez  {(quotient.toString().length > 2 ? quotient.toString().slice(0, 2) : quotient.toString().slice(0, 1) )*divisor}. </StyledText1>
    )}

{step === 2  && (
<StyledText1 style={{color:"green"}}>
      {dividend.toString().slice(0,2)} - {(quotient.toString().length > 2 ? quotient.toString().slice(0, 2) : quotient.toString().slice(0, 1) )*divisor}= {(dividend.toString().slice(0,2))-((quotient.toString().length > 2 ? quotient.toString().slice(0, 2) : quotient.toString().slice(0, 1) )*divisor)}, Faites descendre le troisième nombre({dividend[2]}), obtenez {dividend-(((dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)%divisor)))+'0')}</StyledText1>
    )}

{step === 3  && (
<StyledText1 style={{color:"purple"}}>
     Combien de {divisor} dans {dividend-(((dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)%divisor)))+'0')}?
    Obtenez {quotient%10} ajoutez derniere, obtenez {quotient}. </StyledText1>
    )}


{step === 4  && (
<StyledText1 style={{color:"maroon"}}>
     mulitpliez  le nombre {(quotient%10)} avec {(divisor)} obtenez {(quotient%10)*(divisor)}.</StyledText1>
    )}

{step === 5  && (
<StyledText1 style={{color:"navy"}}>
   {dividend-(((dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)%divisor)))+'0')} - {(quotient%10)*(divisor)} = {remainder} &#60; ({(divisor)}) arretez la division. felictiations!</StyledText1>
    )}


{showCongratulations && (
  <StyledText1>
    
  <span>Choisir un divident de 3 unités et un diviseur de 1 unité, cliquer reset</span>
  </StyledText1>
)}
{zero &&(
  <StyledText1>
    
  <span>C est impossible de diviser par zero, cliquer reset.</span>
  </StyledText1>
)}
</div>


            <div>
            

            

            
              <BandeBox>
                <div className="triangle-activity">
                <TextField
          type="text"
          placeholder="Dividend"
          value={dividend}
          maxLength="3"
          onChange={(e) => setDividend(e.target.value)}
          style={{ width: "90px", marginBottom:"5px", padding: "-20px 0px"}}
          fullWidth
        />
        {step >= 1 &&(
        <div>
        
                <TextField
          type="text"
          placeholder="123"
          value={(dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)%divisor))+' '+'*'}
          onChange={(e) => setDividend(parseInt(e.target.value))}
          style={{ width: "90px", marginBottom:"5px"}}
        />

{step >= 2 &&
               <TextField
          type="text"
          placeholder="Dividend"
          value={dividend-(((dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)%divisor)))+'0')}
          onChange={(e) => setDividend(parseInt(e.target.value))}
          style={{ width: "90px" , marginBottom:"5px"}}
        />
}
{step >= 4 &&
                <TextField
          type="text"
          placeholder="Dividend"
          value={((dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)%divisor)))*10+dividend%10)-((dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)-(dividend.toString().slice(0, 2)%divisor)))*10+dividend%10)%divisor}
          onChange={(e) => setDividend(parseInt(e.target.value))}
          style={{ width: "90px" , marginBottom:"5px"}}
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
                <img src={vertical} alt="Teacher" style={{ width:"30px", height:"250px" }} />
                </div>
                <div>
                <TextField
          type="number"
          placeholder="Divisr"
          value={divisor}
          onChange={(e) => setDivisor(parseInt(e.target.value))}
          style={{ width: "90px", marginBottom:"5px"}}
          fullWidth
        />
        
        <div>
                <img src={horizontal} alt="Teacher" style={{ width:"120px", height:"35px",   padding: "0px 0px", left:"10px", marginLeft:"-25px" }} />
                </div>
        
        {calculated && devide &&!showCongratulations  && step<3 &&
                        <TextField
          type="text"
          placeholder="123"
          value={quotient.toString().length > 2 ? quotient.toString().slice(0, 2) : quotient.toString().slice(0, 1) }
          onChange={(e) => setDividend(parseInt(e.target.value))}
          style={{ width: "90px"}}
        />
}

        {step >= 3 &&
                                <TextField
          type="text"
          placeholder="123"
          value={quotient}
          onChange={(e) => setDividend(parseInt(e.target.value))}
          style={{ width: "90px", marginBottom:"5px"}}
        />
}


        {step >= 5 && !showCongratulations &&(
          <span style={{ width: "90px"}}>
      Quotient={quotient}
      </span>
      )}

                </div>
              </BandeBox>
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
            </div>
            </div>
            </div>
          </TriangleContainer>
        
  );
}

export default P3A3;