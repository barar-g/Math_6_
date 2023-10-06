import React, { useState } from "react";
import fteacher from "../Images/teacher.png";
import inestine from "../Images/inestine.png";
import C2A1 from "./C2A1";
import C2E1 from "./C2E1";
import C2E2 from "./C2E2";
import TestC2 from "./QCMC2";
import styled from "styled-components";

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
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

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
                        <FormulaText><strong>Le mediatrice</strong> =La médiatrice est une droite perpendiculaire au segment reliant les deux extrémités d'un segment, coupant celui-ci en deux parties égales.</FormulaText>
                        <FormulaText><strong> Droite perpendiculaire</strong>= Une droite perpendiculaire est une ligne qui forme un angle de 90 degrés (angle droit) par rapport à une autre ligne ou un plan.</FormulaText>
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
              <TestC2/>
            </div>
            </div>
          )}
        
        </SectionContainer>)}



      {section < 5 && (
        <ContinueButton onClick={() => setSection(section + 1)}>
          Continuer
        </ContinueButton>
      )}
    </Container>
  );
};

export default C2;
