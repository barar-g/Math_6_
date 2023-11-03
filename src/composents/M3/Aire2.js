import React, { useState } from 'react';
import Aire1 from './Aire1'; 
import M3 from './M3'; 
import QCMM3 from './QCMM3';
import teacherImage from '../Images/Prof1.png';
import teacher from '../Images/teacher.png';
import styled from 'styled-components';

// Import des styles
import {
  Container, SectionContainer, ImageContainer,FormulaText, Card, FormulaBox,BodyText,Subtitle, ContinueButton
} from '../Styles/MajorStyles'; // Assurez-vous que le chemin est correct
import Rapporteur from './Rapporteur';


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
                        Salut! Aujourd'hui, on va parler d'un sujet intéressant : Mesure des angles.
                    </BodyText>
                </Card>
            </SectionContainer>
            
            {section >= 1 && (
                <div>
                    <SectionContainer>
                    <FormulaBox>
                        <Subtitle>🔍 Concept clés🔍</Subtitle>
                        <FormulaText>
    <strong>Les grands nombres :</strong> Plus un nombre a de chiffres, plus il est grand. Ainsi, "100" est plus grand que "99". On utilise des séparateurs, comme une virgule, pour faciliter la lecture: 1 000, 10 000, etc.
</FormulaText>

<FormulaText>
    <strong>Noms des grands nombres :</strong> 1 000 est un "mille", 1 000 000 est un "million" et 1 000 000 000 est un "milliard".
</FormulaText>

<FormulaText>
    <strong>Astuce :</strong> Pense à des situations réelles: une ville a des milliers d'habitants, un pays a des millions d'habitants !
</FormulaText>



                    </FormulaBox>
                    </SectionContainer>
                    

                   
                </div>
            )}

{section >= 2 && (
                <div>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={teacherImage} alt="Enseignant" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                Écris un nombre et découvre ses détails.
                            </BodyText>
                        </Card>
                    </SectionContainer>
                    <br></br>
                    <br></br>

                    <div style={{ marginBottom: '50px', width: '100%', height:'100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Aire1 />
                        </div>
                        <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
                    </div>
                </div>
            )}
            
            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                   
                        <M3 />
                    </div>
                    <div className="separator"></div>
                </div>
            )}

            {section >= 4 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <ImageContainer>
                            <img src={teacherImage} alt="Enseignant" />
                        </ImageContainer>
                        <QCMM3 />
                    </div>
                    <div className="separator"></div>
                </div>
            )}

           

            {section < 4 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;