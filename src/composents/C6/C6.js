
import React, { useState } from 'react';
import C5A3 from './C5A3'; 
import C5A4 from './C5A4'; 
import C5A5 from './C5A5';
import QCMC6 from './QCMC6';
import Container from '@mui/material/Container';
import teacher from '../Images/teacher.png';
import { SectionContainer, ImageContainer, Card, BodyText, Separator, ContinueButton,FormulaText,FormulaBox,Subtitle } from '../Styles/MajorStyles';
import Audio from "./Audio6" ;

const C1 = () => {
    const [section, setSection] = useState(0);

    return (
        <Container>
            <SectionContainer>
                <ImageContainer>
                    <img src={teacher} alt="Teacher" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        Salut! Aujourd'hui, on va parler d'un sujet intéressant : Les grands nombres.
                    </BodyText>
                </Card>
            </SectionContainer>

            {section >= 1 && (
                <div>
                    <SectionContainer>
        <FormulaBox>
                        <Subtitle>🔍 Concept clés🔍</Subtitle>
                        <FormulaText>
    <strong>Multiplication :</strong> La multiplication est une manière rapide d'ajouter le même nombre plusieurs fois.
</FormulaText>

<FormulaText>
    <strong>Exemple 1 :</strong> Imaginons que tu as 3 boîtes de crayons, et dans chaque boîte, il y a 4 crayons. Pour trouver le total de crayons, tu peux multiplier : 3 x 4 = 12. Donc, tu as 12 crayons en tout.
</FormulaText>

<FormulaText>
    <strong>Exemple 2 :</strong> Si tu as 5 sacs et chaque sac contient 6 jouets, alors le total de jouets est : 5 x 6 = 30. Tu as donc 30 jouets en tout.
</FormulaText>

<FormulaText>
    <strong>Astuce :</strong> Quand tu multiplies par 10, tu ajoutes simplement un zéro à la fin du nombre ! Par exemple, 7 x 10 = 70.
</FormulaText>
<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>



                    </FormulaBox>
        </SectionContainer>
                    <Separator />
                </div>
            )}

{section >= 2 && (
                <div>
                    <C5A3 />
                    <Separator />
                </div>
            )}
            
            
            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <C5A4 />
                    </div>
                    <Separator />
                </div>
            )}

            {section >= 4 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                       <C5A5 />
                    </div>
                    <Separator />
                </div>
            )}

            {section >= 5 && (<div><QCMC6 /></div>)}

            {section < 5 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
