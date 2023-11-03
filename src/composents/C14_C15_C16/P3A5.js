import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fteacher from "../Images/fteacherr.png";
import inestine from "../Images/inestine.png";
import  Audio from "./Audio14";

import P3A5_2 from "./P3A5-2";
import Bend from "./Bend";
import "./bend.css";
import useSound from "use-sound";
import correctSound from "../sounds/correct.mp3";
import incorrectSound from "../sounds/incorrect.mp3";
import QCMC14 from'./QCMC14';
import {ContinueButton} from '../Styles/MajorStyles';

import {
  Container,
  SectionContainer,
  ImageContainer,
  Card,
  BodyText,
  Title,
  Subtitle,
  FormulaBox,
  FormulaText
} from '../Styles/MajorStyles';


const BandeBox = styled.div`
  width: 150px;
  height: 20px;
  border: 4px solid #4caf50;
  display: flex;
  overflow: hidden;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: #ffeb3b;
`;

const FractionBande = styled.div`
  flex: 1;
  box-sizing: border-box;
  background-color: ${(props) => (props.isActive ? "#FFC107" : "#E1F5FE")};
  border: ${(props) =>
    props.isActive ? "2px dashed #FF5722" : "2px dashed #B3E5FC"};
  transition: background-color 0.4s, transform 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  font-family: "Comic Sans MS", sans-serif;
  margin-right: 5px;

  &:hover {
    transform: scale(1.05);
  }

  &:last-child {
    margin-right: 0;
  }
`;



const SymbContainers = styled.div`
  margin-right: 10px;
`;

const DescContainers = styled.div`
  margin-right: 30px;
  margin-top: 15px;
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



// App Component
const P3A5 = () => {
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);
  const [opverify, setOpverify] = useState(false);
  const [showX, setShowX] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState(">");
  const [questions, setQuestions] = useState([]);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [section, setSection] = useState(0);
  const [showSections, setShowSections] = useState([
    true,
    true,
    true,
    true,
    true,
  ]);
  const toggleSection = (index) => {
    const updatedShowSections = [...showSections];
    updatedShowSections[index] = !updatedShowSections[index];
    setShowSections(updatedShowSections);
  };

  const generateQuestion = () => {
    const newQuestions = [generatenewComparaison()];
    setQuestions(newQuestions);
    setShowCongratulations(false);
    
  };
  const generatenewComparaison = () => {
    const first = Math.floor(Math.random() * 12) + 1;
    const last = Math.floor(Math.random() * 12) + 1;
    return { first, last };
  };
  const VerifieSumbol = () => {
    const first = questions.reduce((sum, q) => sum + Math.floor(q.first), 0);
    const last = questions.reduce((sum, q) => sum + q.last, 0);
    if (selectedSymbol === ">" && first >= last) {
      setShowCongratulations(true);
      setOpverify(true);
      play();
    } else if (selectedSymbol === "<" && last > first) {
      setShowCongratulations(true);
      setOpverify(true);
      play()
    } else if (selectedSymbol === "=" && last === first) {
      setShowCongratulations(true);
      setOpverify(true);
      play()
    } else {
      setShowCongratulations(false);
      setOpverify(false);
      play1();
      setShowX(true); // Show the "X" element
      setTimeout(() => {
        setShowX(false); // Hide the "X" element after 2 seconds
      }, 2000);
    }
  };
  const handleSymbolClick = (symbol) => {
    setSelectedSymbol(symbol);
  };

  useEffect(() => {
    generateQuestion(); // Call the function when the component mounts
  }, []);
  const [showP2A21, setShowP2A21] = useState(false);

  const reset = () => {
    if (opverify) {
        generateQuestion();
        setShowCongratulations(false);
        setOpverify(false); // Reset the verification status
        
      }
  };

  const verify = () => {
    VerifieSumbol();
  };

  return (
    <Container>
      <Title>➗Comparaison des fraction➗</Title>

      {showSections[0] && (
        <SectionContainer>
          <ImageContainer>
            <img src={fteacher} alt="Teacher" style={{ marginTop: "25px" }} />
          </ImageContainer>
          <Card>
            <BodyText>
              Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
              passionnant : la comparaison des fractions.
            </BodyText>
          </Card>
        </SectionContainer>
      )}

      {section >= 1 && showSections[1] && (
<SectionContainer>
        <FormulaBox>
                        <Subtitle>🔍 Concept clés🔍</Subtitle>
                        <FormulaText>Lors de la comparaison de fractions, se concentrer sur les numérateurs est crucial, car un numérateur plus grand signifie plus de morceaux. Si les dénominateurs sont les mêmes, comparer les numérateurs suffit pour déterminer la fraction la plus grande. Sinon, il faut trouver des fractions équivalentes avec le même dénominateur pour une comparaison précise. Cela permet des comparaisons efficaces pour déterminer la plus grande ou la plus petite fraction.
</FormulaText>
<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                    </FormulaBox>
        </SectionContainer>)}
        {section >= 2 && showSections[2] && (
      <Subtitle> Activites</Subtitle>)}
      {section >= 2 && showSections[2] && (
        <SectionContainer>
          {!showP2A21 && (
            <div>
              <Bend />
            </div>
          )}
        </SectionContainer>
      )}


      {section >= 2 && showSections[2] && (
        <SectionContainer>
             <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
            <ImageContainer>
            <img src={inestine} alt="Teacher" style={{ marginTop: "25px" }} />
          </ImageContainer>
            </div>
            {!showP2A21 && (
        <div>
          <P3A5_2 />
        </div>
      )}

      </div>

        </SectionContainer>
      )}
      
      

      {section >= 2 && showSections[2] && (<SectionContainer>
        <SymbContainers>
            <FormulaBox
              className="symbols"
              onClick={() => handleSymbolClick(">")}
            >
              &#62;
            </FormulaBox>

            <FormulaBox
              className="symbols"
              onClick={() => handleSymbolClick("<")}
            >
              &#60;
            </FormulaBox>

            <FormulaBox
              className="symbols"
              onClick={() => handleSymbolClick("=")}
            >
              &#61;
            </FormulaBox>
          </SymbContainers>

          <DescContainers>
            <h3>superieur</h3>
            <h3 style={{ marginTop: "50px" }}>Inferieur</h3>
            <h3 style={{ marginTop: "45px" }}>Egale</h3>
          </DescContainers>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <FormulaBox className="fractions">
                <div class="frac">
                  {questions.map((q, index) => (
                    <span>{q.first}</span>
                  ))}
                  <span class="symbol">/</span>
                  <span class="bottom">12</span>
                </div>
              </FormulaBox>

              <FormulaBox className="mainSymb">{selectedSymbol}</FormulaBox>

              <FormulaBox className="fractions">
                <div class="frac1">
                  {questions.map((q, index) => (
                    <span>{q.last}</span>
                  ))}
                  <span class="symbol">/</span>
                  <span class="bottom">12</span>
                </div>
              </FormulaBox>
            </div>
            <div>
              <ResetButton variant="contained" type="submit" onClick={verify}  style={{ marginRight: "25px" }} >
                Verifier
              </ResetButton>
              {showX && <span>✖️</span>}
              {showCongratulations && <span>✅</span>}
              <VerifieButton style={{ marginLeft: "25px" }} onClick={reset}>
                Reset
              </VerifieButton>
            </div>
            {showCongratulations && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <div class="frac1">
                  {questions.map((q, index) => (
                    <span>{q.first}</span>
                  ))}
                  <span class="symbol">/</span>
                  <span class="bottom">12</span>

                  {questions.map((q, index) => (
                    <span>{q.last}</span>
                  ))}
                  <span class="symbol">/</span>
                  <span class="bottom">12</span>
                </div>
                {questions.map((q, index) => (
                <div style={{ marginLeft: "20px" }}>
                  <BandeBox style={{ marginBottom: "20px" }}>
                    
                    {[...Array(12)].map((_, index) => (
                      <FractionBande
                      key={index}
                      isActive={index < q.first}
                      onClick={() => {}}>
                       
                      </FractionBande>
                    ))}
                  </BandeBox>
                  <BandeBox>
                  {[...Array(12)].map((_, index) => (
                      <FractionBande
                      key={index}
                      isActive={index < q.last}
                      onClick={() => {}}>

                      </FractionBande>
                    ))}
                  </BandeBox>
                </div>
                ))}
              </div>
            )}
          </div>
        
        </SectionContainer>)}
        {section >= 3 && showSections[1] && (
<SectionContainer>
       <QCMC14/>
        </SectionContainer>)}

      {section < 3 && (
                       <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>            

      )}
    </Container>
  );
};

export default P3A5;

// const MainContainer = styled.div`

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   min-height: 100vh;
//   background-color: #f5f5f5;
// `;

// const Box = styled.div`
//   width: 300px;
//   height: 300px;
//   border: 4px solid #4CAF50;
//   ;
//   border-radius: 50%;
//   background-color: #FFEB3B;
//   display: flex;
//   font-size: 0.9em;
//   justify-content: center;
//   position: relative;
// `;

// const Fraction = styled.div`
//   width: 100%;
//   height: 23%;

//   background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')};
//   border: ${(props) => (props.isActive ? '3px dashed #FF5722' : '3px dashed #B3E5FC')};
//   transition: background-color 0.4s, transform 0.3s;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 0.9em;
//   font-weight: bold;
//   text-align: center;
//   border-radius: 0px 0px 0 100%;

// `;

// const ResetButton = styled.button`
//   margin-top: 20px;
//   background-color: #4CAF50;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   font-size: 1em;
//   cursor: pointer;
//   box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
//   &:hover {
//     background-color: #45a049;
//   }

// `;

// const FractionActivity = () => {
//   const [activeFractions, setActiveFractions] = useState([false, false, false, false]);

//   const toggleFraction = (index) => {
//     const updatedActiveFractions = [...activeFractions];
//     updatedActiveFractions[index] = !updatedActiveFractions[index];
//     setActiveFractions(updatedActiveFractions);
//   };

//   const reset = () => {
//     setActiveFractions([false, false, false, false]);
//   };

//   return (
//     <MainContainer>
//       <Box>
//         <Fraction
//           isActive={activeFractions[0]}
//           onClick={() => toggleFraction(0)}
//           style={{transform: 'translate(50%, 50%) scale(2.05)rotate(90deg)'}}
//         >
//         <span style={{ transform: 'rotate(270deg)'}}>{activeFractions[0] ? '1/4' : ''}</span>
//         </Fraction>
//         <Fraction
//           isActive={activeFractions[1]}
//           onClick={() => toggleFraction(1)}
//           style={{ transform: 'translate(150%, 50%) scale(2.05) rotate(180deg)' }}
//         >
//           <span style={{ transform: 'rotate(180deg)'}}>{activeFractions[1] ? '1/4' : ''}</span>
//         </Fraction>
//         <Fraction
//           isActive={activeFractions[2]}
//           onClick={() => toggleFraction(2)}
//           style={{ transform: 'translate( 50%, 250%) scale(2.05) rotate(270deg)'}}
//         >
//           <span style={{ transform: 'rotate(90deg)'}}>{activeFractions[2] ? '1/4' : ''}</span>
//         </Fraction>
//         <Fraction
//           isActive={activeFractions[3]}
//           onClick={() => toggleFraction(3)}
//           style={{ transform: 'translate(-250%, 250%) scale(2.1) rotate(360deg)' }}
//         >
//           {activeFractions[3] ? '1/4' : ''}
//         </Fraction>
//       </Box>
//       <ResetButton onClick={reset}>Réinitialiser</ResetButton>
//     </MainContainer>
//   );
// }
// const Dodecagon = () => {
//   return (
//     <div className="dodecagon">
//       {/* You can add content inside the dodecagon if needed */}
//     </div>
//   );
// };
// export default FractionActivity;
