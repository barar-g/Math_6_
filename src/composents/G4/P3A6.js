import React, { useState } from "react";
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
} from "../Styles/MajorStyles"; // Assurez-vous que le chemin est correct

import fteacher from "../Images/fteacherr.png";
import inestine from "../Images/inestine.png";
import QCMG4 from "./QCMG4";
import Triangle from "./triangle";
import Triangle1 from "./triangle1";
import "../C14_C15_C16/bend.css";
import  Audio from "./AudioG4";

const P3A6 = () => {
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
      <Title>Construction des triangles</Title>
      {showSections[0] && (
        <SectionContainer>
          <ImageContainer>
            <img src={fteacher} alt="Teacher" style={{ marginTop: "25px" }} />
          </ImageContainer>
          <Card>
            <BodyText>
              Salut à tous ! Aujourd'hui, nous allons plonger dans un sujet
              passionnant : la construction des triangles.
            </BodyText>
          </Card>
        </SectionContainer>
      )}
      {section >= 1 && showSections[1] && (
        <SectionContainer>
          <FormulaBox>
            <Subtitle>🔍 Concept clés🔍</Subtitle>
            <FormulaText>
              <strong>La regle triangulaire</strong> =la somme des longueurs de deux côtés d'un triangle doit être supérieure à la longueur du troisième côté pour que le triangle soit valide.
            </FormulaText>
            <FormulaText>
              <strong>Plage de longueurs valides</strong>= Pour qu'un triangle soit valide, la longueur du troisième côté doit être comprise entre la différence des longueurs des côtés  et leur somme.
            </FormulaText>
            <div style={{ display: "flex", alignItems: "center" }}>
            <Audio/>
            </div>
          </FormulaBox>
        </SectionContainer>
      )}
      {section >= 2 && showSections[2] && (
        <>
          <Subtitle>Activites</Subtitle>
          <SectionContainer style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
              <Triangle />
            </div>
          </SectionContainer>
        </>
      )}
      {section >= 2 && showSections[2] && (
        <SectionContainer style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <ImageContainer>
              <img src={inestine} alt="Teacher" style={{ marginTop: "25px" }} />
            </ImageContainer>
            {!showP2A21 && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Triangle1 />
              </div>
            )}
          </div>
        </SectionContainer>
      )}
      {section >= 3 && showSections[3] && (
        <SectionContainer>
          {!showP2A21 && (
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
              <QCMG4 />
            </div>
          )}
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

export default P3A6;
