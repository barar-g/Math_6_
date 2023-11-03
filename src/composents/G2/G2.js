import React, { useState } from "react";
import fteacher from "../Images/fteacherr.png";
import inestine from "../Images/inestine.png";
import Geo from "./Geo";
import QCMG2 from './QCMG2';
import Audio from "./AudioG2";

// Import styled components from MajorStyles.js
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
  ContinueButton,
} from '../Styles/MajorStyles'; 

const G1 = () => {
  const [section, setSection] = useState(0);
  const [showSections] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);




  const [showP2A21] = useState(false);


  return (
    <Container>
      <Title>Construction Geometirque</Title>

      {showSections[0] && (
        <SectionContainer>
          <ImageContainer>
            <img src={fteacher} alt="Teacher" style={{ marginTop: "25px" }} />
          </ImageContainer>
          <Card>
            <BodyText>
              Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
              passionnant :Construction Geometrique.
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
    <strong>parallélogramme</strong>:<br/>
    1. Tracez [AB].<br/>
    2. À partir de A et B, tracez deux droites parallèles avec l'angle donné pour former C et D.<br/>
    3. Reliez C et D pour fermer le parallélogramme.<br/>
</FormulaText>

<FormulaText>
    <strong>carré</strong>:<br/>
    1. Tracez [AB].<br/>
    2. Érigez les médiatrices en A et B pour former C et D.<br/>
    3. Reliez C et D.<br/>
</FormulaText>

<FormulaText>
    <strong> Rectangle</strong>:<br/>
    1. Tracez [AB] et [BC] perpendiculaires entre elles.<br/>
    2. À partir de B, tracez une droite parallèle à [AB].<br/>
    3. À partir de C, tracez une droite parallèle à [BC] pour rencontrer la précédente en D.<br/>
    4. Reliez A et D.
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
          <Geo/>
        </div>



        
      )}
      
      </div>

        </SectionContainer>
      )}


      {section >= 3 && showSections[3] && (
      <SectionContainer>
      <QCMG2/>
        </SectionContainer>
      )}

      {section < 3 && (
        <ContinueButton onClick={() => setSection(section + 1)}>
          Continuer
        </ContinueButton>
      )}
    </Container>
  );
};

export default G1;