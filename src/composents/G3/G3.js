import React, { useState } from 'react';
import G3A1 from './G3A1';
import G3A2 from './G3A2';
import QCMG3 from './QCMG3';
import Audio from "./AudioG3";

import teacher from '../Images/teacher.png';

// Importing styled components from MajorStyles.js
import {
    Container,
    SectionContainer,
    ImageContainer,
    Card,
    BodyText,
    Subtitle,
    FormulaBox,
    FormulaText,
    ContinueButton,
    Separator
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
                            Salut! Aujourd'hui, on va parler d'un sujet intéressant : Mesures des Angles.
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
                        <FormulaText>
    <strong>Mesure des angles :</strong>
    Un angle est défini par la rencontre de deux demi-droites ayant une origine commune. La mesure de cet angle est l'écart entre ces deux demi-droites et elle est généralement exprimée en degrés (°).
</FormulaText>
<FormulaText>
    <strong>Angle aigu :</strong> 
    Un angle dont la mesure est comprise entre 0° et 90° (non inclus).
</FormulaText>
<FormulaText>
    <strong>Angle droit :</strong> 
    Un angle qui mesure exactement 90°.
</FormulaText>
<FormulaText>
    <strong>Angle obtus :</strong>
    Un angle dont la mesure est comprise entre 90° et 180° (non inclus).
</FormulaText>
<FormulaText>
    <strong>Angle plat :</strong>
    Un angle qui mesure exactement 180°.
</FormulaText>
<FormulaText>
    <strong>Angle plein :</strong>
    Un angle qui mesure exactement 360°.
</FormulaText>
<div style={{ display: "flex", alignItems: "center" }}>
<Audio/>
</div>

                    </FormulaBox>
        </SectionContainer>
      )}
            
            {section >= 2 && (<div> 
              
                <div >
                  
                    <div >
                   
                        <G3A1/>
                    </div>
                    <Separator />
                </div>
                </div> )}
            
            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      
                        <G3A2/>
                    </div>
                    <Separator />
                </div>
            )}

           

            {section >= 4 && (<div><QCMG3 /> 
            </div>)}

            {section < 4 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;