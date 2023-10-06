import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Assurez-vous que ce chemin d'accès est correct.
import fteacher from "../Images/fteacherr.png";
import inestine from "../Images/inestine.png";
import Divs from "./Divs";
import Test9 from "./QCMC11";

// Styles


const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const SectionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e1e1;
`;

const ImageContainer = styled.div`
  flex: 0 0 auto;
  width: 150px;
  margin-right: 20px;
  img {
    width: 100%;
    height: "auto";
  }
`;

const Card = styled.div`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
const BodyText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: white; // texte en blanc pour le contraste avec le fond bleu

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #222;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const SkipIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 240px;
  cursor: pointer;
  font-size: 24px;
  color: #888;
  &:hover {
    color: #666;
  }
`;

const Subtitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #444;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const FormulaBox = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 20px;
  background-color: white;
`;

const FormulaText = styled(BodyText)`
  color: black; // Ici nous définissons la couleur en noir
`;

const ContinueButton = styled.button`
    display: block;
    margin: 0px 0;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007BFF;
    color: white;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    &:hover {
        background-color: #0056b3;
    }
`;

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
              <Test9 />
            </div>
            </div>
          )}
        
        </SectionContainer>)}
        
    

      {section < 3 && (
        <ContinueButton onClick={() => setSection(section + 1)}>
          Continuer
        </ContinueButton>
      )}
    </Container>
  );
};

export default P3A8;
