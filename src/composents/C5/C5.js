import React, { useState } from "react";
import fteacher from "../Images/teacher.png";
import inestine from "../Images/inestine.png";
import Audio from "./Audio5" ;
import C5A1 from "./C5A1";
import C5A2 from "./C5A2";
import TestC5 from "./QCMC5";
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
} from '../Styles/MajorStyles'; // Importez vos composants stylisés ici


  




const C5 = () => {
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
      <Title>Convertur unite de longuer </Title>

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
    <strong>Utilisation des parenthèses :</strong> Les parenthèses nous montrent quelles opérations faire en premier en maths.
</FormulaText>

<FormulaText>
    <strong>Exemple 1 :</strong> L'expression 5 + 2 x 3, normalement, on multiplie d'abord, donc le résultat serait 11. Mais si on met des parenthèses : (5 + 2) x 3, alors on fait l'addition en premier, et le résultat devient 21.
</FormulaText>

<FormulaText>
    <strong>Exemple 2 :</strong> Pour 2 + 4 + 3 x 2, normalement, on multiplie d'abord, donc le résultat serait 14. Mais avec des parenthèses : (2 + 4 + 3) x 2, on fait toutes les additions en premier, et le résultat devient 18.
</FormulaText>

<FormulaText>
    <strong>Astuce :</strong> Quand tu vois des parenthèses, pense à faire ce qui est à l'intérieur en premier !
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
          <C5A1/>
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
              <C5A2/>
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
              <TestC5/>
            </div>
            </div>
          )}
        
        </SectionContainer>)}

      {section < 4 && (
  <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
        )}
    </Container>
  );
};

export default C5;
