import React, { useState } from 'react'; 
import M2A2 from './M2A2'
import QCMC6 from './QCMM2';
import teacher from '../Images/teacher.png'
import M2A1 from './M2A1';
import M2A3 from './M2A3';
import Audio from "./AudioM2";
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
    Separator,
    StyledText
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
                            Salut! Aujourd'hui, on va parler d'un sujet intéressant : Mesure des Masses.
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

                        <FormulaText><strong>Unité de mesure</strong> = L'unité de base pour la mesure de la masse dans le Système International est le kilogramme (kg). D'autres unités dérivées incluent le gramme (g) qui est égal à 1/1000 de kilogramme.</FormulaText>
                        <FormulaText><strong>Conversion</strong> = 1 kilogramme (kg) est équivalent à 1000 grammes (g), 1 gramme (g) est équivalent à 1000 milligrammes (mg).</FormulaText>
                        <FormulaText><strong>Balance</strong> = C'est un outil utilisé pour mesurer la masse d'un objet. Les balances modernes peuvent être numériques et donner une lecture directe de la masse, tandis que les balances traditionnelles utilisent un ensemble de poids pour équilibrer et déterminer la masse de l'objet.</FormulaText>
                        <div style={{ display: "flex", alignItems: "center" }}>
<Audio/>
</div>

                    </FormulaBox>

        </SectionContainer>
      )}
            {section >= 2 && (<div> 
              
                <div >
                  
                    <div >
                   
                        <M2A1 />
                    </div>
                    <Separator />
              
                </div>
                </div> )}
             
            {section >= 3 && (
                   <div style={{ marginBottom: '50px', width: '100%' }}>
                   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                   <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <M2A2 />
                    </div>
               
                    <Separator />
                </div>
            )}
            
            {section >= 4 && (
                
                    <div >
                    <div >
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        <M2A3 />
                    </div>
                      <Separator />
                </div>
            )}

            {section >= 5 && (<div><QCMC6 /> 
            </div>)}

            {section < 5 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
