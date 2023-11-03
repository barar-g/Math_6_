import React, { useState } from "react";
import fteacher from "../Images/teacher.png";
import inestine from "../Images/inestine.png";
import C2A1 from "./C2A1";
import C2E1 from "./C2E1";
import C2E2 from "./C2E2";
import QCMC2 from "./QCMC2";
import styled from "styled-components";
import Audio from "./Audio2" ;



import {
  Container,
  SectionContainer,
  ImageContainer,
  Card,
  BodyText,
  Title,
  Subtitle,
  FormulaBox,
  FormulaText,
  ContinueButton
} from '../Styles/MajorStyles'; 

const StyledText = styled.p`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-family: "Comic Sans MS", sans-serif;
  &:hover {
    transform: scale(1.05);
  }`;






const C2 = () => {
  const [section, setSection] = useState(0);
  const [showSections, setShowSections] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);




  const [showP2A21, setShowP2A21] = useState(false);


  return (
    <Container>
      <Title>Comparer et ordonner des nombers</Title>

      {showSections[0] && (
        <SectionContainer>
          <ImageContainer>
            <img src={fteacher} alt="Teacher" style={{ marginTop: "25px" }} />
          </ImageContainer>
          <Card>
            <BodyText>
              Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
              passionnant : Comparer et ordonner des nombers.
            </BodyText>
          </Card>
        </SectionContainer>
      )} 
{section >= 1 && showSections[1] && (
      <Subtitle> Rappel</Subtitle>)}
      {section >= 1 && showSections[1] && (
      <SectionContainer>
        <FormulaBox>
                        <Subtitle>🔍 Concept clés🔍</Subtitle>
                        <FormulaText>
    <strong>Comparer des nombres :</strong> C'est déterminer lequel est le plus grand, le plus petit ou s'ils sont égaux. On compare d'abord les parties entières, puis les parties après la virgule pour les nombres décimaux. Les nombres négatifs, c'est comme des températures : plus le chiffre est gros, plus il fait froid !
</FormulaText>

<FormulaText>
    <strong>Ordonner des nombres :</strong> C'est les mettre dans un certain ordre. Du plus petit au plus grand, c'est comme monter des marches. Du plus grand au plus petit, c'est comme descendre des marches.
</FormulaText>

<FormulaText>
    <strong>Astuce :</strong> Pour t'aider, imagine une ligne de nombres. Place les nombres dessus pour voir leur ordre. Avec de la pratique, tout deviendra facile !
</FormulaText>
<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>

                    </FormulaBox>
        </SectionContainer>
      )}
      {section >= 2 && showSections[2] && (
      <Subtitle> 🍕Activites🍕</Subtitle>)}
      {section >= 2 && showSections[2] && (
        <SectionContainer style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          
          {!showP2A21 && (
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
            </div>
            </div>
          )}
          
        </SectionContainer>
      )}
      {section >= 2 && showSections[2] && (
        <SectionContainer style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <C2A1/>
        </div>
        
      )}
      
      </div>

        </SectionContainer>
      )}
          

      
     
        {section >= 3  && showSections[3] && (<SectionContainer>
        {!showP2A21 && (
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <C2E1/>
            </div>
            </div>
          )}
        
        </SectionContainer>)}

        {section >= 4 && showSections[4] && (<SectionContainer>
        {!showP2A21 && (
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <C2E2/>
            </div>
            </div>
          )}
        
        </SectionContainer>)}

        {section >= 5 && showSections[5] && (<SectionContainer>
        {!showP2A21 && (
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <QCMC2/>
            </div>
            </div>
          )}
        
        </SectionContainer>)}



      {section < 5 && (
         < ContinueButton onClick={() => setSection(section + 1)}>Continuer</ ContinueButton>
      )}
    </Container>
  );
};

export default C2;
