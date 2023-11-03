import React, { useState, useEffect } from "react";
import { 
  Container, 
  SectionContainer, 
  ImageContainer, 
  Card, 
  BodyText, 
  Title, 
  SkipIcon, 
  Subtitle, 
  FormulaBox, 
  FormulaText, 
  ContinueButton
} from '../Styles/MajorStyles'; // Importer les styles du fichier MajorStyles.js
import fteacher from "../Images/fteacherr.png";
import inestine from "../Images/inestine.png";
import Perim from "./Perimetre";
import QCMM4 from "./QCMM4";
import Audio from "./AudioM4";



// App Component
const P3A8 = () => {
  const [section, setSection] = useState(0);
  const [showSections, setShowSections] = useState([
    true,
    true,
    true,
    true,
    true,
  ]);





  const [showP2A21, setShowP2A21] = useState(false);


  return (
    <Container>
      <Title>Perimetres et Aires</Title>

      {showSections[0] && (
        <SectionContainer>
          <ImageContainer>
            <img src={fteacher} alt="Teacher" style={{ marginTop: "25px" }} />
          </ImageContainer>
          <Card>
            <BodyText>
              Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
              passionnant : Les perimetres .
            </BodyText>
          </Card>
        </SectionContainer>
      )}
      {section >= 1 && showSections[1] && (
      <Subtitle> Rappel </Subtitle>
      )}
      {section >= 1 && showSections[1] && (
       <SectionContainer>
        <FormulaBox>
                        <Subtitle>🔍 Concept clés🔍</Subtitle>
                        <FormulaText><strong>Definition</strong>= Le périmètre est la somme des longueurs de tous les côtés d'une figure géométrique. </FormulaText>
                        <FormulaText><strong>Definition</strong>= L'aire est la mesure de la surface à l'intérieur des limites d'une figure géométrique, exprimée en unités carrées..</FormulaText>
                        <FormulaText><strong>Le perimetre de carre</strong>= Le périmètre d'un carré est la somme des longueurs de ses quatre côtés, où tous les côtés ont la même longueur. Si "c" représente la longueur d'un côté du carré, alors le périmètre serait égal à 4c.</FormulaText>
                        <FormulaText><strong>L aire de carre</strong>= 'aire d'un carré est calculée en multipliant la longueur d'un côté par lui-même (côté * côté) ou en élevant le côté au carré.</FormulaText>
                        <div style={{ display: "flex", alignItems: "center" }}>
<Audio/>
</div>
                    </FormulaBox>
        </SectionContainer>
      )}
       {section >= 2 && showSections[2] && (
      <Subtitle> 🍕Activites🍕</Subtitle>
       )}
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
          <Perim />
        </div>
        
      )}
      
      </div>

        </SectionContainer>
      )}
             

      {section >= 3 && showSections[3] && (<SectionContainer>
        {!showP2A21 && (
            <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div>
              <QCMM4 />
            </div>
            </div>
          )}
        
        </SectionContainer>)}
        
      {section < 3 && (
              <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>    

      )}
    </Container>
  );
};

export default P3A8;
