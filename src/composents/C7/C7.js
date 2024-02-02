import React, { useState } from 'react';
import Plus from './Plus';
import QCMC7 from './QCMC7';
import teacher from '../Images/teacher.png';
import prof from '../Images/Prof1.png';
import Audio from "./Audio7" ;


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
                        Salut! Aujourd'hui, on va parler d'un sujet intéressant : Addition des grandes nombres
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
<strong>Regle de retenir :</strong>Si on ajoute des nombre et que le resultat superieur ou egale a 10, on ecrit le premier nombre et on retietnt le 1.
</FormulaText>
<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>


                    </FormulaBox>
                    </SectionContainer>
                    

                   
                </div>
            )}

            

            {section >= 2 && (
                <div>
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
    <img src={prof} alt="Teacher" style={{ width: '50%', maxWidth: '300px' }} />
</div>

<br></br>
            
                <SectionContainer>
                    <Plus />
                </SectionContainer>
                </div>
            )}

           

            {section >= 3 && (
                <QCMC7 />
            )}

            {section < 3 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C2;
