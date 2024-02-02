import React, { useState, useEffect } from "react";
import fteacher from "../Images/fteacherr.png";
import inestine from "../Images/inestine.png";
import Divs from "./Divs";
import QCM11 from "./QCMC11";
import Audio from "./Audio11" ;

// Import des styles
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
  ContinueButton,
} from '../Styles/MajorStyles';  // Ajustez le chemin si nécessaire






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
  const toggleSection = (index) => {
    const updatedShowSections = [...showSections];
    updatedShowSections[index] = !updatedShowSections[index];
    setShowSections(updatedShowSections);
  };




  const [showP2A21, setShowP2A21] = useState(false);


  return (
    <Container>
      <Title>Caractères de divisibilité</Title>

      {showSections[0] && (
        <SectionContainer>
          <ImageContainer>
            <img src={fteacher} alt="Teacher" style={{ marginTop: "25px" }} />
          </ImageContainer>
          <Card>
            <BodyText>
              Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
              passionnant : Caractères de divisibilité.
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
          <FormulaText>On dit qu un nombre A est divisible par un nombre B si le reste de division est 0 </FormulaText>
          <FormulaText><strong>divisible par 2 </strong>=Un nombre est dvisible par 2 si il finit avec Un nombre pair.<br></br> les nombres pairs sont 0;2;4;6;8</FormulaText>
          <FormulaText><strong>divisible par 3 </strong>=Un nombre est divisible par 3 si le somme des ces nombre est multiple de 3<br></br>
          le nombre 573 est divisible par 3 car le somme de ces unites est  </FormulaText>
          <FormulaText><strong>divisible par 5 </strong>=Un nombre est divisible par 5 si il finit par 0 ou 5<br></br>
          le nombre 573 n est pas divisible par 5 car il finit par 3  </FormulaText>
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
          <Divs/>
        </div>

        
        
      )}
<br>
</br>

      
      </div>

        </SectionContainer>
      )}

      
{section >= 3 && showSections[3] && (
      <Subtitle> QCM </Subtitle>)}
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
              <QCM11/>
            </div>
            </div>
          )}
        
        </SectionContainer>)}
        
    

      {section < 3 && (
       <ContinueButton  onClick={() => setSection(section + 1)}>Continuer</ContinueButton>            
      )}
    </Container>
  );
};

export default P3A8;
