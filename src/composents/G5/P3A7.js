import React, { useState, useEffect } from "react";
import styled from "styled-components";
// Assurez-vous que ce chemin d'accès est correct.
import fteacher from "../Images/fteacherr.png";
import inestine from "../Images/inestine.png";
import QCMG5 from "./QCMG5";
import Droit from "./Droit";
import Audio from "./AudioG5";


// Styles
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


// App Component
const P3A7 = () => {
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
      <Title>Droites remerquable</Title>

      {showSections[0] && (
        <SectionContainer>
          <ImageContainer>
            <img src={fteacher} alt="Teacher" style={{ marginTop: "25px" }} />
          </ImageContainer>
          <Card>
            <BodyText>
              Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
              passionnant : la constructiondroites remerquables.
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
          <Droit />
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
              <QCMG5 />
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

export default P3A7;
