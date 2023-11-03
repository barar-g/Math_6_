import React, { useState } from 'react';
import G1A2 from './G1A2'; 
import G1A1 from './G1A1'; 
import G1A3 from './G1A3';
import G1A4 from './G1A4';
import QCMG1 from './QCMG1';
import teacherImage from '../Images/Prof1.png';
import teacher from '../Images/teacher.png'
import Audio from "./AudioG1";

// Import styles from MajorStyles.js
import { 
    Container, 
    SectionContainer, 
    ImageContainer, 
    Card, 
    BodyText, 
    ContinueButton, 
    Separator, 
    Subtitle, 
    FormulaBox, 
    FormulaText 
} from '../Styles/MajorStyles';

const C1 = () => {
    const [section, setSection] = useState(0);

    return (
        <Container >
           
                <SectionContainer>
                    <ImageContainer>
                        <img src={teacher} alt="Teacher" />
                    </ImageContainer>
                    <Card>
                        <BodyText>
                            Salut! Aujourd'hui, on va parler d'un sujet intéressant : parallel et perpendicular.
                        </BodyText>
                    </Card>
                   
                </SectionContainer>
                <br/>
         
                {section >= 1 &&  (
      <Subtitle> Rappel</Subtitle>)}
      {section >= 1  && (
      <SectionContainer>
        <FormulaBox>
                        <Subtitle>🔍 Concept clés🔍</Subtitle>
                        <FormulaText><strong>La parallèle</strong> =Une droite parallèle à une autre est une droite qui, dans un même plan, ne coupe jamais l'autre droite, quelle que soit la distance à laquelle elles sont prolongées.</FormulaText>

                        <FormulaText><strong> Droite perpendiculaire</strong>= Une droite perpendiculaire est une ligne qui forme un angle de 90 degrés (angle droit) par rapport à une autre ligne ou un plan.</FormulaText>
                        <div style={{ display: "flex", alignItems: "center" }}>
<Audio/>
</div>
                    </FormulaBox>
        </SectionContainer>
      )}
            
            {section >= 2 && (<div> 

              
                <div style={{ marginBottom: '50px', width: '100%', height:'100%' }}>
                  
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
                        <G1A2 />
                    </div>
                    <Separator />
                </div>
                </div> )}
            
            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
                        <G1A1 />
                    </div>
                    <Separator />
                </div>
            )}

            {section >= 4 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                   <img src={teacherImage} alt="Enseignant" style={{ maxWidth: '50%', height: 'auto' }} />
                    <G1A3 />
                    </div>
                      <Separator />
                </div>
            )}

            {section >= 5 && (<div><G1A4 /> 
            </div>)}

            {section >= 6 && (<div><QCMG1/> 
            </div>)}

            {section < 6 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;