import React, { useState } from 'react';
import C4A1 from './C4A1'; 
import C4A2 from './C4A2'; 
import C4A3 from './C4A3';
import C4A4 from './C4A4';
import QCMC4 from './QCMC4';
import teacher from '../Images/teacher.png';
import prof from '../Images/Prof1.png';
import Audio from "./Audio4" ;

// Importation des styles depuis MajorStyles
import {
  Container,
  SectionContainer,
  ImageContainer,
  Card,
  BodyText,
  ContinueButton,
  FormulaText,
  FormulaBox,
  Subtitle
} from '../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

const C2 = () => {
    const [section, setSection] = useState(0);

    return (
        <Container>
            <SectionContainer>
                <ImageContainer>
                    <img src={teacher} alt="Teacher" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        Salut! Aujourd'hui, on va parler d'un sujet intéressant : Ajouter et retrancher.
                    </BodyText>
                </Card>
            </SectionContainer>

            {section >= 1 && (
                <div>
                    <SectionContainer>
                    <FormulaBox>
                        <Subtitle>🔍 Concept clés🔍</Subtitle>
                        <FormulaText>
    <strong>Ajouter :</strong> C'est combiner des nombres. Si tu as 3 pommes et que tu en prends 2 de plus, tu as alors 3 + 2 = 5 pommes.
</FormulaText>

<FormulaText>
    <strong>Retrancher :</strong> C'est enlever une quantité d'un nombre. Si tu as 5 pommes et que tu en manges 2, il te reste 5 - 2 = 3 pommes.
</FormulaText>

<FormulaText>
    <strong>Astuce :</strong> Pour t'aider, imagine une pile de blocs. Ajouter, c'est mettre plus de blocs sur la pile. Retrancher, c'est en enlever.
</FormulaText>
<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>



                    </FormulaBox>
                    </SectionContainer>
                    

                   
                </div>
            )}

            {section >= 2 && (
                <SectionContainer>
                    <C4A4/>
                </SectionContainer>
            )}

            {section >= 2 && (
                <SectionContainer>
                    <C4A1/>
                </SectionContainer>
            )}

            {section >= 4 && (
                <div>
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
    <img src={prof} alt="Teacher" style={{ width: '50%', maxWidth: '300px' }} />
</div>

<br></br>
            
                <SectionContainer>
                    <C4A2 />
                </SectionContainer>
                </div>
            )}

            {section >= 5 && (
                

                <SectionContainer>
                    <C4A3 />
                </SectionContainer>
              
            )}

            {section >= 6 && (
                <QCMC4 />
            )}

            {section < 6 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C2;
