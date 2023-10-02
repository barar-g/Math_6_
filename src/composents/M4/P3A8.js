import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Assurez-vous que ce chemin d'accès est correct.
import fteacher from "../Images/fteacherr.png";
import inestine from "../Images/inestine.png";
import Perim from "./Perimetre";
import Test8 from "./Test8";

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
  margin: 15px 0;
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
              <Test8 />
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
