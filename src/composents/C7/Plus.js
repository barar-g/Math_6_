// Activite de division , remplacement divs.jss

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  TextField,
} from "@mui/material";

import horizontal from "../Images/horizontal.png";



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
  const [First, setFirst] = useState('');
  const [Last, setLast] = useState('');
  const [calculated, setCalculated] = useState(false);
  const[quotient, setQuotient] = useState(0);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [Plus, setPlus] = useState(false);
  const [step, setStep] = useState(0);
  const[fStep, setFStep] =  useState(0);
  const[sStep, setSStep] =  useState(0);
  const[tStep, setTStep] =  useState(0);
  const[foStep, setFoStep] =  useState(0);
  const[fiStep, setFiStep] = useState(0);
  const[SixStep, setSixStep] = useState(0);
  const[SevStep, setSevStep] = useState(0);
  const[EiStep, setEiStep] = useState(0);



  const calculateDivision = () => {
    const newQuestions = [
      generateSingleQuestion(),
      

    ];
    setQuestions(newQuestions);
  };    
    const generateSingleQuestion = () => {
  
  
  

    const quotient = Number(First) + Number(Last);




    const fStep = 
    First.length == 1 && Last.length == 1
    ? 
    quotient
    :
    (Number(First.toString()[First.toString().length - 1])+Number(Last.toString()[Last.toString().length - 1])).toString().length <2
    ? 
    Number(First.toString()[First.toString().length - 1])+Number(Last.toString()[Last.toString().length - 1])
    :
    (Number(First.toString()[First.toString().length - 1])+Number(Last.toString()[Last.toString().length - 1])).toString()[(Number(First.toString()[First.toString().length - 1])+Number(Last.toString()[Last.toString().length - 1])).toString().length-1];


    const sStep =  (Last.length + First.length > 2 && Last.length + First.length <= 4)
    ? 
    quotient
    :
    (Number(First.toString()[First.toString().length - 2])+Number(Last.toString()[Last.toString().length - 2])).toString().length <2
    ? 
    Number(((Number(First.toString()[First.toString().length - 1])+Number(Last.toString()[Last.toString().length - 1])).toString().length <2? 0:1))+Number(Number(First.toString()[First.toString().length - 2])+Number(Last.toString()[Last.toString().length - 2]))
    :
    Number(((Number(First.toString()[First.toString().length - 1])+Number(Last.toString()[Last.toString().length - 1])).toString().length <2? 0:1))+Number((Number(First.toString()[First.toString().length - 2])+Number(Last.toString()[Last.toString().length - 2])).toString()[(Number(First.toString()[First.toString().length - 2])+Number(Last.toString()[Last.toString().length - 2])).toString().length-1]);


    const tStep = (Last.length + First.length > 4 && Last.length + First.length <= 6)
    ? 
    quotient
    :
    (Number(First.toString()[First.toString().length - 3])+Number(Last.toString()[Last.toString().length - 3])).toString().length <2
    ? 
    Number(((Number(First.toString()[First.toString().length - 2])+Number(Last.toString()[Last.toString().length - 2])).toString().length <2? 0:1))+Number(Number(First.toString()[First.toString().length - 3])+Number(Last.toString()[Last.toString().length - 3]))
    :
    Number(((Number(First.toString()[First.toString().length - 2])+Number(Last.toString()[Last.toString().length - 2])).toString().length <2? 0:1))+Number((Number(First.toString()[First.toString().length - 3])+Number(Last.toString()[Last.toString().length - 3])).toString()[(Number(First.toString()[First.toString().length - 3])+Number(Last.toString()[Last.toString().length - 3])).toString().length-1]);


    const foStep = (Last.length + First.length > 6 && Last.length + First.length <= 8)
    ? 
    quotient
    :
    (Number(First.toString()[First.toString().length - 4])+Number(Last.toString()[Last.toString().length - 4])).toString().length <2
    ? 
    Number(((Number(First.toString()[First.toString().length - 3])+Number(Last.toString()[Last.toString().length - 3])).toString().length <2? 0:1))+Number(Number(First.toString()[First.toString().length - 4])+Number(Last.toString()[Last.toString().length - 4]))
    :
    Number(((Number(First.toString()[First.toString().length - 3])+Number(Last.toString()[Last.toString().length - 3])).toString().length <2? 0:1))+Number((Number(First.toString()[First.toString().length - 4])+Number(Last.toString()[Last.toString().length - 4])).toString()[(Number(First.toString()[First.toString().length - 4])+Number(Last.toString()[Last.toString().length - 4])).toString().length-1]);




    const fiStep = (Last.length + First.length > 8 && Last.length + First.length <= 10)
    ? 
    quotient
    :
    (Number(First.toString()[First.toString().length - 5])+Number(Last.toString()[Last.toString().length - 5])).toString().length <2
    ? 
    Number(((Number(First.toString()[First.toString().length - 4])+Number(Last.toString()[Last.toString().length - 4])).toString().length <2? 0:1))+Number(Number(First.toString()[First.toString().length - 5])+Number(Last.toString()[Last.toString().length - 5]))
    :
    Number(((Number(First.toString()[First.toString().length - 4])+Number(Last.toString()[Last.toString().length - 4])).toString().length <2? 0:1))+Number((Number(First.toString()[First.toString().length - 5])+Number(Last.toString()[Last.toString().length - 5])).toString()[(Number(First.toString()[First.toString().length - 5])+Number(Last.toString()[Last.toString().length - 5])).toString().length-1]);

    const SixStep = (Last.length + First.length > 10 && Last.length + First.length <= 12)
    ? 
    quotient
    :
    (Number(First.toString()[First.toString().length - 6])+Number(Last.toString()[Last.toString().length - 6])).toString().length <2
    ? 
    Number(((Number(First.toString()[First.toString().length - 5])+Number(Last.toString()[Last.toString().length - 5])).toString().length <2? 0:1))+Number(Number(First.toString()[First.toString().length - 6])+Number(Last.toString()[Last.toString().length - 6]))
    :
    Number(((Number(First.toString()[First.toString().length - 5])+Number(Last.toString()[Last.toString().length - 5])).toString().length <2? 0:1))+Number((Number(First.toString()[First.toString().length - 6])+Number(Last.toString()[Last.toString().length - 6])).toString()[(Number(First.toString()[First.toString().length - 6])+Number(Last.toString()[Last.toString().length - 6])).toString().length-1]);



    const SevStep = (Last.length + First.length > 12 && Last.length + First.length <= 14)
    ? 
    quotient
    :
    (Number(First.toString()[First.toString().length - 7])+Number(Last.toString()[Last.toString().length - 7])).toString().length <2
    ? 
    Number(((Number(First.toString()[First.toString().length - 6])+Number(Last.toString()[Last.toString().length - 6])).toString().length <2? 0:1))+Number(Number(First.toString()[First.toString().length - 7])+Number(Last.toString()[Last.toString().length - 7]))
    :
    Number(((Number(First.toString()[First.toString().length - 6])+Number(Last.toString()[Last.toString().length - 6])).toString().length <2? 0:1))+Number((Number(First.toString()[First.toString().length - 7])+Number(Last.toString()[Last.toString().length - 7])).toString()[(Number(First.toString()[First.toString().length - 7])+Number(Last.toString()[Last.toString().length - 7])).toString().length-1]);


    const EiStep = (Last.length + First.length > 14 && Last.length + First.length <= 16)
    ? 
    quotient
    :
    (Number(First.toString()[First.toString().length - 8])+Number(Last.toString()[Last.toString().length - 8])).toString().length <2
    ? 
    Number(((Number(First.toString()[First.toString().length - 7])+Number(Last.toString()[Last.toString().length - 7])).toString().length <2? 0:1))+Number(Number(First.toString()[First.toString().length - 8])+Number(Last.toString()[Last.toString().length - 8]))
    :
    Number(((Number(First.toString()[First.toString().length - 7])+Number(Last.toString()[Last.toString().length - 7])).toString().length <2? 0:1))+Number((Number(First.toString()[First.toString().length - 8])+Number(Last.toString()[Last.toString().length - 8])).toString()[(Number(First.toString()[First.toString().length - 8])+Number(Last.toString()[Last.toString().length - 8])).toString().length-1]);




  










    setQuotient(quotient);
    setCalculated(true);
    setPlus(true);
    setFStep(fStep);
    setSStep(sStep);
    setTStep(tStep);
    setFoStep(foStep);
    setFiStep(fiStep);
    setSixStep(SixStep);
    setSevStep(SevStep);
    setEiStep(EiStep);
  };
  useEffect(() => {
    reset();
  }, []);


  const handleFirstChange = (event) => {
    const input = event.target.value;

    // Check if the input is a valid number
    if (!isNaN(input)) {
      setFirst(input);
    }
  };

  const handleLastChange = (event) => {
    const input = event.target.value;

    // Check if the input is a valid number
    if (!isNaN(input)) {
      setLast(input);
    }
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    generateSingleQuestion();
    
   
  };

  const reset = () => {
    setFirst('');
    setLast('');
    setQuotient('');
    setShowCongratulations(false);
    setPlus(false);
    setStep(0);
    setCalculated(false);
    setFStep(0);
    setSStep(0);
    setTStep(0);
    setFoStep(0);
    setFiStep(0);
    setSixStep(0);
    setSevStep(0);
    setEiStep(0);
  } 

  const forward = () => {
    if (calculated && step < 9) {
      // Check if quotient matches any of the steps
      const matchingStep = [fStep, sStep, tStep, foStep, fiStep, SixStep, SevStep, EiStep].findIndex(
        (stepValue) => stepValue === quotient
      );
  
      // If a match is found, set the step accordingly
      if (matchingStep !== -1) {
        if (step < matchingStep) {
          setStep(step + 1);
        } else {
          // Matching steps are 0-indexed, so incrementing to matchingStep + 1 stops at matchingStep
          setStep(matchingStep + 1);
        }
      } 
    }
  };
  
  
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


              
{!showCongratulations && !Plus && (
<StyledText1>
    
    <span>Bienvenue dans le programme d addition</span>
    </StyledText1 >
    )}
          

{step === 1   &&(
<StyledText1 style={{color:"blue"}}>
 {Number(First.toString()[First.toString().length - 1])}  + {Number(Last.toString()[Last.toString().length - 1])} = {(Number(First.toString()[First.toString().length - 1])+Number(Last.toString()[Last.toString().length - 1]))}. ecrivez {fStep}. {(Number(First.toString()[First.toString().length - 1])+Number(Last.toString()[Last.toString().length - 1]))>=10 && fStep != quotient? 'retenz 1':''}  </StyledText1>
    )}
{step === 2   &&(
<StyledText1 style={{color:"blue"}}>
 {Number(First.toString()[First.toString().length - 2])}  + {Number(Last.toString()[Last.toString().length - 2])} = {(Number(First.toString()[First.toString().length - 2])+Number(Last.toString()[Last.toString().length - 2]))}{(Number(First.toString()[First.toString().length - 1])+Number(Last.toString()[Last.toString().length - 1]))>=10 ? ('+(1 retené)='+(Number(First.toString()[First.toString().length - 2])+Number(1)+Number(Last.toString()[Last.toString().length - 2]))):''}.ecrivez {sStep}. {(Number(First.toString()[First.toString().length - 2])+Number(Last.toString()[Last.toString().length - 2]))>=10 && sStep != quotient? 'retenz 1':''}  </StyledText1>
    )}



{step === 3   &&(
<StyledText1 style={{color:"blue"}}>
 {Number(First.toString()[First.toString().length - 3])}  + {Number(Last.toString()[Last.toString().length - 3])} = {(Number(First.toString()[First.toString().length - 3])+Number(Last.toString()[Last.toString().length - 3]))}{(Number(First.toString()[First.toString().length - 2])+Number(Last.toString()[Last.toString().length - 2]))>=10 ? ('+(1 retené)='+(Number(First.toString()[First.toString().length - 3])+Number(1)+Number(Last.toString()[Last.toString().length - 3]))):''}.ecrivez {tStep}. {(Number(First.toString()[First.toString().length - 3])+Number(Last.toString()[Last.toString().length - 3]))>=10 && tStep != quotient? 'retenz 1':''}  </StyledText1>
    )}


{step === 4   &&(
<StyledText1 style={{color:"blue"}}>
 {Number(First.toString()[First.toString().length - 4])}  + {Number(Last.toString()[Last.toString().length - 4])} = {(Number(First.toString()[First.toString().length - 4])+Number(Last.toString()[Last.toString().length - 4]))}{(Number(First.toString()[First.toString().length - 3])+Number(Last.toString()[Last.toString().length - 3]))>=10 ? ('+(1 retené)='+(Number(First.toString()[First.toString().length - 4])+Number(1)+Number(Last.toString()[Last.toString().length - 4]))):''}.ecrivez {foStep}. {(Number(First.toString()[First.toString().length - 4])+Number(Last.toString()[Last.toString().length - 4]))>=10 && foStep != quotient? 'retenz 1':''}  </StyledText1>
    )}


{step === 5   &&(
<StyledText1 style={{color:"blue"}}>
 {Number(First.toString()[First.toString().length - 5])}  + {Number(Last.toString()[Last.toString().length - 5])} = {(Number(First.toString()[First.toString().length - 5])+Number(Last.toString()[Last.toString().length - 5]))}{(Number(First.toString()[First.toString().length - 4])+Number(Last.toString()[Last.toString().length - 4]))>=10 ? ('+(1 retené)='+(Number(First.toString()[First.toString().length - 5])+Number(1)+Number(Last.toString()[Last.toString().length - 5]))):''}.ecrivez {fiStep}. {(Number(First.toString()[First.toString().length - 5])+Number(Last.toString()[Last.toString().length - 5]))>=10 && fiStep != quotient ? 'retenz 1':''}  </StyledText1>
    )}



{step === 6   &&(
<StyledText1 style={{color:"blue"}}>
 {Number(First.toString()[First.toString().length - 6])}  + {Number(Last.toString()[Last.toString().length - 6])} = {(Number(First.toString()[First.toString().length - 6])+Number(Last.toString()[Last.toString().length - 6]))}{(Number(First.toString()[First.toString().length - 5])+Number(Last.toString()[Last.toString().length - 5]))>=10 ? ('+(1 retené)='+(Number(First.toString()[First.toString().length - 6])+Number(1)+Number(Last.toString()[Last.toString().length - 6]))):''}.ecrivez {SixStep}. {(Number(First.toString()[First.toString().length - 6])+Number(Last.toString()[Last.toString().length - 6]))>=10 && SixStep != quotient? 'retenz 1':''}  </StyledText1>
    )}


{step === 7   &&(
<StyledText1 style={{color:"blue"}}>
 {Number(First.toString()[First.toString().length - 7])}  + {Number(Last.toString()[Last.toString().length - 7])} = {(Number(First.toString()[First.toString().length - 7])+Number(Last.toString()[Last.toString().length - 7]))}{(Number(First.toString()[First.toString().length - 6])+Number(Last.toString()[Last.toString().length - 6]))>=10 ? ('+(1 retené)='+(Number(First.toString()[First.toString().length - 7])+Number(1)+Number(Last.toString()[Last.toString().length - 7]))):''}.ecrivez {SevStep}. {(Number(First.toString()[First.toString().length - 7])+Number(Last.toString()[Last.toString().length - 7]))>=10 && SevStep != quotient? 'retenz 1':''}  </StyledText1>
    )}


{step === 8   &&(
<StyledText1 style={{color:"blue"}}>
 {Number(First.toString()[First.toString().length - 8])}  + {Number(Last.toString()[Last.toString().length - 8])} = {(Number(First.toString()[First.toString().length - 8])+Number(Last.toString()[Last.toString().length - 8]))}{(Number(First.toString()[First.toString().length - 7])+Number(Last.toString()[Last.toString().length - 7]))>=10 ? ('+(1 retené)='+(Number(First.toString()[First.toString().length - 8])+Number(1)+Number(Last.toString()[Last.toString().length - 8]))):''}.ecrivez {EiStep}. {(Number(First.toString()[First.toString().length - 8])+Number(Last.toString()[Last.toString().length - 8]))>=10 && EiStep != quotient? 'retenz 1':''}  </StyledText1>
    )}


{(First.toString().length> 8 || Last.toString().length>8)  && calculated &&(
  <StyledText1 style={{color:"red"}}>
    Les numeros doivent etre  au plus de 8 chiffres pour voire l explication
  </StyledText1>

)

}
{First.toString().length<= 8 && Last.toString().length<=8 && step<1 && calculated && (
  <StyledText1 style={{color:"Blue"}}>
    Voici votre resultat cliquer &#62; pour voire l explication
  </StyledText1>

)

}









</div>


            <div>
            

            

            
              <BandeBox>
              <div
          
          >
                <div>
                <TextField
          type="text"
          placeholder="1ere numero"
          value={First}
          onChange={handleFirstChange}
          style={{ width: "170px", marginBottom:"10px", marginLeft:"20px", direction: 'rtl', marginTop:"10px"}}
          fullWidth
        />
                </div>
                <div>
                <TextField
          type="text"
          placeholder="2eme numero"
          value={Last}
          onChange={handleLastChange}
          style={{ width: "170px", marginLeft:"20px",direction: 'rtl'}}
          fullWidth
        />
                </div>
                <div>
           <img src={horizontal} alt="Teacher" style={{ width:"210px", height:"50px" }} />
           </div>
           {calculated && step<1 &&
           <div>
            
                <TextField
          type="text"
          placeholder="First"
          value={quotient}
          maxLength="7"
          onChange={(e) => setFirst(e.target.value)}
          style={{ width: "170px", marginLeft:"20px", direction: 'rtl'}}
          fullWidth
        />
        </div>
}
{step==1 &&
           <div>
            
                <TextField
          type="text"
          placeholder="First"
          value={fStep}
          maxLength="7"
          onChange={(e) => setFirst(e.target.value)}
          style={{ width: "170px", marginLeft:"20px", direction: 'rtl'}}
          fullWidth
        />
        </div>
}
{step==2 &&
           <div>
            
                <TextField
          type="text"
          placeholder="First"
          value={(Last.length + First.length > 2 && Last.length + First.length <= 4) ?  sStep : (sStep.toString() + fStep.toString()) }
          maxLength="3"
          onChange={(e) => setFirst(e.target.value)}
          style={{ width: "170px", marginLeft:"20px", direction: 'rtl'}}
          fullWidth
        />
        </div>
}
{step==3 &&
           <div>
            
                <TextField
          type="text"
          placeholder="First"
          value={(Last.length + First.length > 4 && Last.length + First.length <= 6) ?  tStep : (tStep.toString()+sStep.toString() + fStep.toString()) }
          maxLength="3"
          onChange={(e) => setFirst(e.target.value)}
          style={{ width: "170px", marginLeft:"20px", direction: 'rtl'}}
          fullWidth
        />
        </div>
}
{step==4 &&
           <div>
            
                <TextField
          type="text"
          placeholder="First"
          value={(Last.length + First.length > 6 && Last.length + First.length <= 8) ?  foStep : (foStep.toString()+tStep.toString()+sStep.toString() + fStep.toString()) }
          maxLength="3"
          onChange={(e) => setFirst(e.target.value)}
          style={{ width: "170px", marginLeft:"20px", direction: 'rtl'}}
          fullWidth
        />
        </div>
}

{step==5 &&
           <div>
            
                <TextField
          type="text"
          placeholder="First"
          value={(Last.length + First.length > 8 && Last.length + First.length <= 10) ?  fiStep : (fiStep.toString()+foStep.toString()+tStep.toString()+sStep.toString() + fStep.toString()) }
          maxLength="3"
          onChange={(e) => setFirst(e.target.value)}
          style={{ width: "170px", marginLeft:"20px", direction: 'rtl'}}
          fullWidth
        />
        </div>
}

{step==6 &&
           <div>
            
                <TextField
          type="text"
          placeholder="First"
          value={(Last.length + First.length > 10 && Last.length + First.length <= 12) ?  SixStep : (SixStep.toString()+fiStep.toString()+foStep.toString()+tStep.toString()+sStep.toString() + fStep.toString()) }
          maxLength="3"
          onChange={(e) => setFirst(e.target.value)}
          style={{ width: "170px", marginLeft:"20px", direction: 'rtl'}}
          fullWidth
        />
        </div>
}
{step==7 &&
           <div>
            
                <TextField
          type="text"
          placeholder="First"
          value={(Last.length + First.length > 12 && Last.length + First.length <= 14) ?  SevStep : (SevStep.toString()+SixStep.toString()+fiStep.toString()+foStep.toString()+tStep.toString()+sStep.toString() + fStep.toString()) }
          maxLength="3"
          onChange={(e) => setFirst(e.target.value)}
          style={{ width: "170px", marginLeft:"20px", direction: 'rtl'}}
          fullWidth
        />
        </div>
}
{step==8 &&
           <div>
            
                <TextField
          type="text"
          placeholder="First"
          value={(Last.length + First.length > 14 && Last.length + First.length <= 16) ?  EiStep : (EiStep.toString()+SevStep.toString()+SixStep.toString()+fiStep.toString()+foStep.toString()+tStep.toString()+sStep.toString() + fStep.toString()) }
          maxLength="3"
          onChange={(e) => setFirst(e.target.value)}
          style={{ width: "170px", marginLeft:"20px", direction: 'rtl'}}
          fullWidth
        />
        </div>
}
           
                
                
      
           
          
        
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