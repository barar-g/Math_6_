import React, { useState } from "react";
import fteacher from "../Images/teacher.png";
import inestine from "../Images/inestine.png";
import C3A1 from "./C3A1";
import C3A2 from "./C3A2";
import C3A3 from "./C3A3";
import QCMC3 from "./QCMC3";
import styled from "styled-components";
import Audio from "./Audio3" ;

import {
  Container,
  Title,
  SectionContainer,
  ImageContainer,
  Card,
  BodyText,
  Subtitle,
  FormulaBox,
  FormulaText,
  StyledText,
  ContinueButton,
} from '../Styles/MajorStyles'; 






const C3 = () => {
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
      <Title>Convertiseur d'unités de longueur</Title>

      {showSections[0] && (
        <SectionContainer>
          <ImageContainer>
            <img src={fteacher} alt="Teacher" style={{ marginTop: "25px" }} />
          </ImageContainer>
          <Card>
            <BodyText>
              Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
              passionnant :Convertiseur d'unités de longueur.
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
    <strong>Unités de longueur :</strong> Pour mesurer à quel point quelque chose est long ou court, nous utilisons des unités de longueur. Les plus courantes sont le millimètre (mm), le centimètre (cm), le mètre (m) et le kilomètre (km).
</FormulaText>

<FormulaText>
    <strong>Convertir des unités :</strong> Parfois, nous avons besoin de changer d'une unité à une autre. C'est comme échanger des pièces de monnaie : 100 centimes font 1 euro. De la même manière, 100 centimètres font 1 mètre.
</FormulaText>

<FormulaText>
    <strong>Astuce :</strong> Pour passer du mètre au centimètre, multiplie par 100. Pour faire l'inverse, divise par 100. Avec les autres unités, les chiffres peuvent être différents, mais l'idée est la même. Avec un peu de pratique, tu maîtriseras rapidement ces conversions !
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
          <C3A1/>
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
              <C3A3/>
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
              <C3A2/>
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
              <QCMC3/>
            </div>
            </div>
          )}
        
        </SectionContainer>)}

      {section < 5 && (
   <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>      )}
    </Container>
  );
};

export default C3;
